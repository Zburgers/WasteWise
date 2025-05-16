import { Recycle } from 'lucide-react';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="w-full py-6 mb-8">
      <div className="container mx-auto flex items-center justify-center">
        <Recycle className="h-10 w-10 text-primary mr-3" />
        <h1 className="text-4xl font-bold text-primary">WasteWise</h1>
      </div>
    </header>
  );
};

export default Header;
