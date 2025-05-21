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
                className="w-8 h-8 rounded-full border-2 border-green-200 shadow-sm hover:scale-110 transition-transform"
              />
            </TooltipTrigger>
            <TooltipContent className="bg-green-50 px-3 py-2 rounded border border-green-200 shadow-md">
              <p className="text-green-800 font-medium">{badge.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
} 