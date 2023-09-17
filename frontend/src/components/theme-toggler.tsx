import { Moon, Sun, Monitor } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <Button variant="ghost" size="icon">
      {theme === 'dark' ? (
        <Moon onClick={() => setTheme('light')} className="w-4 h-4" />
      ) : theme === 'light' ? (
        <Sun onClick={() => setTheme('system')} className="w-4 h-4" />
      ) : (
        <Monitor onClick={() => setTheme('dark')} className="w-4 h-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
