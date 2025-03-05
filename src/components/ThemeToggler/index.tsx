import { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';

import { ThemeContext } from '@/contexts/theme';

function Switch({
  checked,
  onCheckedChange,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        checked ? 'bg-primary' : 'bg-muted'
      }`}
      onClick={() => onCheckedChange(!checked)}
      {...props}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {checked ? (
          <Moon className="absolute inset-0 h-full w-full p-0.5 text-primary" />
        ) : (
          <Sun className="absolute inset-0 h-full w-full p-0.5 text-primary" />
        )}
      </span>
    </button>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch checked={theme === 'dark'} onCheckedChange={() => toggleTheme()} />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}
