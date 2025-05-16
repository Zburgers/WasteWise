import type { FC } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react'; // Example icons

const Footer: FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} WasteWise. AI for a cleaner tomorrow.
        </p>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WasteWise on Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WasteWise on Github" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WasteWise on LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
