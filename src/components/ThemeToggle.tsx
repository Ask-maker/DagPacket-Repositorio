import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);

        // Actualizar favicon según el tema de la app
        const favicon = document.getElementById('favicon') as HTMLLinkElement;
        const appleTouchIcon = document.getElementById('apple-touch-icon') as HTMLLinkElement;
        // Tema oscuro de la app = favicon claro, tema claro = favicon oscuro
        const faviconPath = theme === 'dark' ? '/favicon-light.png' : '/favicon-dark.png';
        if (favicon) favicon.href = faviconPath;
        if (appleTouchIcon) appleTouchIcon.href = faviconPath;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-yellow-400"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};

export default ThemeToggle;
