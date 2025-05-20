import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Award, Calendar, Users } from 'lucide-react';

const ChallengesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Ready to Level Up Your Eco-Game?</h2>
        <p className="text-muted-foreground mt-2">Join our challenges, make a real difference, and earn rewards.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ChallengeCard 
          title="Recycle Hero Challenge"
          description="Track your recycling efforts for a week and see how much you can divert from the landfill!"
          icon={<Award className="h-10 w-10 text-accent" />}
          timeframe="7 days"
          participants="1,240"
          imagePath="/static/WasteWiseLandingChallenge.png"
        />
        
        <ChallengeCard 
          title="Zero Waste Weekend"
          description="Can you go an entire weekend without creating any landfill waste? Document your journey!"
          icon={<Award className="h-10 w-10 text-accent" />}
          timeframe="2 days"
          participants="856"
          imagePath="/static/recyclingwarrior.png"
        />
        
        <ChallengeCard 
          title="Community Cleanup"
          description="Join or organize a local cleanup event and track the waste collected and properly sorted."
          icon={<Award className="h-10 w-10 text-accent" />}
          timeframe="Ongoing"
          participants="3,120"
          imagePath="/static/ecorookiebadge.png"
        />
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Think you've got what it takes? Head over to the challenges page to see all active challenges and start earning badges!
        </p>
        <Link href="/challenges">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-[0_0_15px_0px_hsl(var(--accent)/0.5)] transition-all duration-300 hover:scale-105">
            Explore All Challenges
          </Button>
        </Link>
      </div>
    </div>
  );
};

interface ChallengeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  timeframe: string;
  participants: string;
  imagePath: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ 
  title, 
  description, 
  icon, 
  timeframe, 
  participants,
  imagePath
}) => {
  return (
    <div className="bg-background/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-[0_0_20px_0px_hsl(var(--accent)/0.7)] transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent">
      <div className="h-48 relative">
        <Image 
          src={imagePath} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          {icon}
          <h3 className="text-xl font-semibold ml-2 text-primary">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-accent/80" />
            <span>{timeframe}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-accent/80" />
            <span>{participants} participants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
