import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="w-full py-6 mt-12 border-t border-border">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} WasteWise. Help us sort it out!</p>
      </div>
    </footer>
  );
};

export default Footer;
