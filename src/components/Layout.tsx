import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-200">
      <main className="flex-1 pb-24 mx-auto w-full max-w-7xl relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>

        {/* Theme toggle floating button */}
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 sm:right-10 z-50 p-2.5 rounded-full bg-white dark:bg-card-dark shadow-md border border-gray-100 dark:border-gray-800 hover:text-primary transition-all active:scale-90"
          aria-label="Toggle theme"
        >
          <span className="material-symbols-outlined">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </main>

      {/* Bottom Navigation (Mobile/Tablet) / Sidebar (Desktop - simulated by Bottom Nav placement for now as requested by user's design reference) */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/90 dark:bg-card-dark/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 z-50">
        <div className="flex justify-around items-center h-16 max-w-4xl mx-auto">
          <button className="flex flex-col items-center justify-center w-full h-full text-primary group">
            <span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform fill-1">home</span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center w-full h-full text-text-sec-light dark:text-text-sec-dark hover:text-text-main-light dark:hover:text-white transition-colors group">
            <span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">analytics</span>
            <span className="text-[10px] font-medium">Reports</span>
          </button>
          <button className="flex flex-col items-center justify-center w-full h-full text-text-sec-light dark:text-text-sec-dark hover:text-text-main-light dark:hover:text-white transition-colors group">
            <span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">calendar_month</span>
            <span className="text-[10px] font-medium">Calendar</span>
          </button>
          <button className="flex flex-col items-center justify-center w-full h-full text-text-sec-light dark:text-text-sec-dark hover:text-text-main-light dark:hover:text-white transition-colors group">
            <span className="material-symbols-outlined mb-1 group-hover:scale-110 transition-transform">settings</span>
            <span className="text-[10px] font-medium">Settings</span>
          </button>
        </div>
      </nav>

      <style>{`
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 20px);
        }
      `}</style>
    </div>
  );
};

export default Layout;
