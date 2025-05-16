"use client";

import { useState, type FC, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, Send, MessageCircle, User, Bot } from 'lucide-react';
import { getDisposalAdvice, type GetDisposalAdviceOutput } from '@/ai/flows/get-disposal-advice';
import type { ChatMessage } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface AiChatbotProps {
  selectedRegion: string;
}

const AiChatbot: FC<AiChatbotProps> = ({ selectedRegion }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);
  
  // Initial greeting message from AI
  useEffect(() => {
    setMessages([
      {
        id: 'initial-greeting',
        sender: 'ai',
        text: `Hello! I'm Waste Wizard. How can I help you with waste disposal in ${selectedRegion || 'your area'} today?`,
        timestamp: new Date(),
      }
    ]);
  }, [selectedRegion]);


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
      const aiResponse: GetDisposalAdviceOutput = await getDisposalAdvice({
        query: newUserMessage.text,
        region: selectedRegion,
      });

      const newAiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponse.advice,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newAiMessage]);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      const errorAiMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        sender: 'ai',
        text: `Sorry, I encountered an error: ${errorMessage}`,
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

  return (
    <Card className="w-full shadow-lg rounded-xl flex flex-col h-[600px] max-h-[80vh]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-primary flex items-center">
          <MessageCircle className="w-7 h-7 mr-2" /> Chat with Waste Wizard
        </CardTitle>
        <CardDescription>Ask questions about waste disposal and get AI-powered advice for your region: <strong>{selectedRegion || "Global (Default)"}</strong>.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-0 overflow-hidden">
        <ScrollArea className="h-full p-6" ref={scrollAreaRef}>
          <div className="space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex items-end space-x-3",
                  msg.sender === 'user' ? "justify-end" : "justify-start"
                )}
              >
                {msg.sender === 'ai' && (
                  <Avatar className="h-8 w-8 border-2 border-primary/50">
                    <AvatarFallback><Bot className="text-primary" /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "p-3 rounded-xl max-w-[70%]",
                    msg.sender === 'user'
                      ? "bg-accent text-accent-foreground rounded-br-none"
                      : "bg-card border border-border text-card-foreground rounded-bl-none shadow-sm"
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  <p className={cn(
                    "text-xs mt-1",
                    msg.sender === 'user' ? "text-accent-foreground/70 text-right" : "text-muted-foreground/70 text-left"
                    )}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                 {msg.sender === 'user' && (
                  <Avatar className="h-8 w-8 border-2 border-accent/50">
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
                <div className="p-3 rounded-lg bg-card border border-border text-card-foreground shadow-sm">
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
            placeholder="Type your question here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
            disabled={isLoading}
            className="flex-grow focus-visible:ring-primary"
          />
          <Button type="submit" onClick={handleSendMessage} disabled={isLoading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AiChatbot;
