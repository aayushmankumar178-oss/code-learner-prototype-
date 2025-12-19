import { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingContextType {
  completed: boolean;
  completeOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState(() => {
    return localStorage.getItem('onboarding_completed') === 'true';
  });

  const completeOnboarding = () => {
    localStorage.setItem('onboarding_completed', 'true');
    setCompleted(true);
  };

  return (
    <OnboardingContext.Provider value={{ completed, completeOnboarding }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error('useOnboarding must be used within OnboardingProvider');
  return context;
}
