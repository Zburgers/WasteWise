
"use client";

import { useState, type FC, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, Send, MessageCircle, User, Bot, X, Minimize2, Maximize2 } from 'lucide-react';
import { getDisposalAdvice, type GetDisposalAdviceOutput } from '@/ai/flows/get-disposal-advice';
import type { ChatMessage } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface AiChatBubbleProps {
  selectedRegion: string;
}

const AiChatBubble: FC<AiChatBubbleProps> = ({ selectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false); // For future use if we want a smaller open state
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isOpen]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'initial-greeting',
          sender: 'ai',
          text: `Hello! I'm Waste Wizard. How can I help you with waste disposal in ${selectedRegion || 'your area'} today? Ask me anything!`,
          timestamp: new Date(),
        }
      ]);
    }
  }, [isOpen, selectedRegion, messages.length]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: inputMessage,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Constructing a structured response based on GetDisposalAdviceOutput
      const aiResponseData: GetDisposalAdviceOutput = await getDisposalAdvice({
        query: newUserMessage.text,
        region: selectedRegion,
      });
      
      let adviceText = `Here's what I found for "${aiResponseData.itemName}":\n\n`;
      aiResponseData.disposalOptions.forEach(option => {
        adviceText += `*${option.method}*:\n`;
        adviceText += `  - Instructions: ${option.instructions}\n`;
        if (option.binColor) adviceText += `  - Bin Color: ${option.binColor} (check locally)\n`;
        if (option.notes) adviceText += `  - Note: ${option.notes}\n`;
        adviceText += `\n`;
      });
      if (aiResponseData.regionalConsiderations) {
        adviceText += `*Regional Considerations (${selectedRegion || 'General'}):*\n${aiResponseData.regionalConsiderations}\n\n`;
      }
      if (aiResponseData.ecoFriendlyAlternatives && aiResponseData.ecoFriendlyAlternatives.length > 0) {
        adviceText += `*Eco-Friendly Alternatives:*\n${aiResponseData.ecoFriendlyAlternatives.map(alt => `  - ${alt}`).join('\n')}\n\n`;
      }
      if (aiResponseData.generalTips && aiResponseData.generalTips.length > 0) {
        adviceText += `*General Tips:*\n${aiResponseData.generalTips.map(tip => `  - ${tip}`).join('\n')}\n`;
      }


      const newAiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: adviceText, // Using the structured response
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newAiMessage]);

    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      const errorAiMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        sender: 'ai',
        text: `Sorry, I encountered an error: ${errorMessage}. Try rephrasing your question or check your connection.`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorAiMessage]);
      toast({
        title: "Chatbot Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Bubble Button */}
      {!isOpen && (
        <Button
          onClick={toggleOpen}
          className={cn(
            "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center",
            "transition-all duration-300 ease-out transform hover:scale-110 animate-bubble-pop-in"
          )}
          aria-label="Open Waste Wizard Chat"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out",
          isMinimized ? "w-80 h-12" : "w-full max-w-md h-[calc(100vh-8rem)] max-h-[600px] md:bottom-6 md:right-6",
          "animate-bubble-pop-in"
        )}>
          <Card className="w-full h-full shadow-2xl rounded-xl flex flex-col bg-card border-primary/30">
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <Bot className="w-7 h-7 mr-2 text-primary" />
                <CardTitle className="text-xl font-semibold text-primary">Waste Wizard</CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                {/* Placeholder for minimize/maximize if needed later
                <Button variant="ghost" size="icon" onClick={() => setIsMinimized(!isMinimized)} className="text-muted-foreground hover:text-foreground">
                  {isMinimized ? <Maximize2 className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
                </Button>
                */}
                <Button variant="ghost" size="icon" onClick={toggleOpen} className="text-muted-foreground hover:text-destructive">
                  <X className="w-5 h-5" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </div>
            </CardHeader>
            {!isMinimized && (
              <>
                <CardContent className="flex-grow p-0 overflow-hidden">
                  <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={cn(
                            "flex items-end space-x-2",
                            msg.sender === 'user' ? "justify-end" : "justify-start"
                          )}
                        >
                          {msg.sender === 'ai' && (
                            <Avatar className="h-8 w-8 border-2 border-primary/50 bg-primary/20">
                              <AvatarFallback><Bot className="text-primary" /></AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={cn(
                              "p-3 rounded-lg max-w-[80%] shadow-sm",
                              msg.sender === 'user'
                                ? "bg-accent text-accent-foreground rounded-br-none"
                                : "bg-secondary text-secondary-foreground rounded-bl-none"
                            )}
                          >
                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                            <p className={cn(
                              "text-xs mt-1 opacity-70",
                              msg.sender === 'user' ? "text-right" : "text-left"
                              )}>
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                           {msg.sender === 'user' && (
                            <Avatar className="h-8 w-8 border-2 border-accent/50 bg-accent/20">
                              <AvatarFallback><User className="text-accent" /></AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex items-center space-x-2 justify-start">
                          <Avatar className="h-8 w-8 border-2 border-primary/50">
                            <AvatarFallback><Bot className="text-primary" /></AvatarFallback>
                          </Avatar>
                          <div className="p-3 rounded-lg bg-secondary text-secondary-foreground">
                            <Loader2 className="h-5 w-5 animate-spin text-primary" />
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <div className="flex w-full items-center space-x-2">
                    <Input
                      type="text"
                      placeholder="Ask about waste..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                      disabled={isLoading}
                      className="flex-grow focus-visible:ring-primary bg-input text-foreground placeholder:text-muted-foreground"
                    />
                    <Button type="submit" onClick={handleSendMessage} disabled={isLoading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                      <span className="sr-only">Send</span>
                    </Button>
                  </div>
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default AiChatBubble;
