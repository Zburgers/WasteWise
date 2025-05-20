import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

interface Badge {
  name: string;
  imageUrl: string;
}

interface BadgeDisplayProps {
  badges: Badge[];
}

export function BadgeDisplay({ badges }: BadgeDisplayProps) {
  if (badges.length === 0) {
    return <span className="text-gray-400">No badges</span>;
  }

  return (
    <div className="flex gap-1">
      <TooltipProvider>
        {badges.map((badge) => (
          <Tooltip key={badge.name}>
            <TooltipTrigger>
              <img
                src={badge.imageUrl}
                alt={badge.name}
                className="w-6 h-6 rounded-full"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{badge.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
} 