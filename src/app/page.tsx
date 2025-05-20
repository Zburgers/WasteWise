// This is the new Landing Page
"use client";

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Lightbulb, Recycle, Zap, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ChallengesSection from '@/components/challenges-section';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary/30 via-background to-background text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 -z-10">
          {/* Decorative background shapes */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground shadow-md">
                WasteWise ✨ AI-Powered Sustainability
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center md:text-left max-w-4xl">
                Ever stared at trash, wondering where it <em className="italic">actually</em> goes?
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4 text-center md:text-left">
                WasteWise gets it. We&apos;re here to turn that trash-confusion into trash-confidence with a little help from AI. Let&apos;s make sorting smarter and living greener the new vibe. 🌍
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_20px_0px_hsl(var(--accent))] mt-6">
                  Explore the App <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <Image 
                src="/static/WasteWiseLogo2.png" 
                alt="WasteWise Hero Logo" 
                width={320} 
                height={320} 
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-xl" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What WasteWise Offers</h2>
            <p className="text-muted-foreground mt-2">Intelligent solutions for a cleaner planet.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-primary" />}
              title="Instant Waste Classification"
              description="Snap a photo, and our AI instantly identifies the waste type, guiding you on proper disposal. 📸"
            />
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-primary" />}
              title="AI Disposal Chatbot"
              description="Have questions? Our AI chatbot provides tailored advice for your specific region and waste items. 💬"
            />
            <FeatureCard
              icon={<Recycle className="w-10 h-10 text-primary" />}
              title="Regional Disposal Info"
              description="Access disposal guidelines specific to your locality, ensuring you're always compliant and eco-friendly. 🗺️"
            />
          </div>
        </div>
      </section>

      {/* Actionable Data Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-background to-background/90">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Get Real-World Actionable Data</h2>
            <p className="text-muted-foreground mt-2">Explore features that provide actionable insights for smarter waste management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-accent mb-3">Personal Impact Dashboard</h3>
              <p className="text-muted-foreground mb-4">Track your waste reduction journey with personalized metrics showing your environmental impact over time.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>CO₂ emissions prevented</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Water saved through proper disposal</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                  <span>Landfill space conserved</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-accent mb-3">Community Progress Maps</h3>
              <p className="text-muted-foreground mb-4">Visualize how your community is performing and identify areas for improvement.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Local recycling hotspots</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                  <span>Contamination reduction rates</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal-500 mr-2"></div>
                  <span>Community waste diversion goals</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/dashboard">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Explore Your Data Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-background via-background/95 to-card/40">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="/static/vision.png" 
              alt="Vision of a greener planet" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-2xl object-cover"
              data-ai-hint="green planet future"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Vision: A Waste-Free World 💡</h2>
            <p className="text-lg text-muted-foreground">
              We envision a future where waste is minimized, resources are conserved, and sustainability is a way of life. WasteWise is more than an app; it's a movement towards intelligent waste management, empowering individuals and communities to make a tangible difference.
            </p>
            <p className="text-lg text-muted-foreground">
              By leveraging AI, we aim to bridge the information gap in waste disposal, making it easier for everyone to participate in creating a circular economy.
            </p>
          </div>
        </div>
      </section>

      {/* How It Solves Problems Section */}
      <section className="w-full py-16 md:py-24 bg-card/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Solving Real-World Challenges 🛠️</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <SolutionCard
              title="Educational Empowerment"
              icon={<BookOpen className="w-8 h-8 mb-3 text-accent" />}
              description="WasteWise serves as an interactive learning tool. Users gain practical knowledge about different waste types, recycling processes, and the environmental impact of their choices. This fosters a deeper understanding and encourages sustainable habits from a young age. 📚👩‍🏫"
            />
            <SolutionCard
              title="Automating Waste Management"
              icon={<Users className="w-8 h-8 mb-3 text-accent" />}
              description="For municipalities and businesses, WasteWise can integrate with existing systems to automate aspects of waste stream analysis and provide data-driven insights for optimizing collection routes and facility operations. This leads to cost savings and improved efficiency. 🏢♻️"
            />
            <SolutionCard
              title="Reducing Contamination"
              icon={<Lightbulb className="w-8 h-8 mb-3 text-accent" />}
              description="Incorrect sorting is a major issue in recycling. Our AI-driven classification helps users sort accurately, reducing contamination in recycling streams and increasing the quality of recyclable materials. ✅"
            />
            <SolutionCard
              title="Promoting Circular Economy"
              icon={<Zap className="w-8 h-8 mb-3 text-accent" />}
              description="By providing clear disposal options, including reuse and specialized recycling, WasteWise encourages participation in the circular economy, keeping materials in use for longer and reducing reliance on virgin resources. 🔄"
            />
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="w-full py-16 md:py-24 bg-card/20">
        <ChallengesSection />
      </section>

      {/* Impact Statistics Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-card/20 to-card/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Impact So Far</h2>
            <p className="text-muted-foreground mt-2">Together, we're making measurable changes for our planet.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard value="52,340" label="Waste Items Classified" />
            <StatCard value="18,750" label="kg CO₂ Prevented" />
            <StatCard value="6,240" label="Active Users" />
            <StatCard value="83%" label="Accurate Sorting Rate" />
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">These numbers grow every day as our community expands!</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-card/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Users Say</h2>
            <p className="text-muted-foreground mt-2">Real stories from people making a difference with WasteWise.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="WasteWise has completely transformed how my family approaches recycling. The AI classification feature is incredibly accurate!" 
              author="Sarah K." 
              role="Community Leader"
            />
            <TestimonialCard 
              quote="As a teacher, I use WasteWise to educate my students about sustainability. The gamification makes learning fun and effective." 
              author="Michael T." 
              role="Environmental Educator"
            />
            <TestimonialCard 
              quote="I never realized how much of my waste could be recycled until I started using this app. The regional disposal information is a game-changer." 
              author="Aisha M." 
              role="Zero-Waste Enthusiast"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-card/60 to-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-sm rounded-xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">Stay Updated on Sustainable Living</h2>
              <p className="text-center text-muted-foreground mt-3 mb-6">
                Subscribe to our newsletter for the latest tips, challenges, and features.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 min-w-0 px-4 py-2 rounded-md bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <Button type="submit" size="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-tr from-primary/20 via-background/90 to-background text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Make a Difference?</h2>
          <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl">
            Join the WasteWise community and take the first step towards smarter waste management. It's easy, informative, and impactful.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="mt-8 group bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_20px_0px_hsl(var(--primary))]">
              Start Sorting Smarter <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-card shadow-xl hover:shadow-[0_0_20px_0px_hsl(var(--accent)/0.8)] transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {icon}
        <CardTitle className="text-xl text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
function SolutionCard({ title, description, icon }: SolutionCardProps) {
  return (
    <div className="flex flex-col items-start p-6 bg-card rounded-lg shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_0px_hsl(var(--primary)/0.7)] hover:border-primary border border-transparent transform hover:-translate-y-1">
      {icon}
      <h3 className="text-2xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg border border-border hover:border-primary transition-all duration-300">
      <div className="mb-4 text-accent">"</div>
      <p className="text-muted-foreground italic mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

