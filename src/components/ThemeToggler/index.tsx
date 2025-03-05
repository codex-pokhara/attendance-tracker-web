import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';

import { ThemeContext } from '@/contexts/theme';

import { Switch } from '../ui/switch';

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ml-auto mr-5">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'dark' ? 'scale-75 rotate-12' : 'text-foreground scale-100 rotate-0'
        }`}
      />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'light' ? 'scale-75 rotate-12' : 'text-foreground scale-100 rotate-0'
        }`}
      />
    </div>
  );
}
