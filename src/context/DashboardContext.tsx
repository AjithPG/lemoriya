'use client';

import * as React from 'react';

interface DashboardContextType {
  currentCategory: string | null;
  setCurrentCategory: (category: string | null) => void;
  currentView: string;
  setCurrentView: (view: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedPromptId: string | null;
  setSelectedPromptId: (id: string | null) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const DashboardContext = React.createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentCategory, setCurrentCategory] = React.useState<string | null>(null);
  const [currentView, setCurrentView] = React.useState<string>('browse');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [selectedPromptId, setSelectedPromptId] = React.useState<string | null>(null);
  const [favorites, setFavorites] = React.useState<string[]>([]);

  // Load favorites from localStorage if available
  React.useEffect(() => {
    const saved = localStorage.getItem('prompt_favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse favorites', e);
      }
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id];
      localStorage.setItem('prompt_favorites', JSON.stringify(next));
      return next;
    });
  };

  return (
    <DashboardContext.Provider
      value={{
        currentCategory,
        setCurrentCategory,
        currentView,
        setCurrentView,
        searchQuery,
        setSearchQuery,
        selectedPromptId,
        setSelectedPromptId,
        favorites,
        toggleFavorite
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = React.useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
