"use client";

import React, { useState, useMemo } from "react";
interface HandleQuestionI {
  valueStep: number;
  setValueStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepsProgressContext = React.createContext<HandleQuestionI | null>(null);

export const useStepsProgress = () => React.useContext(StepsProgressContext);

const StepsProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [valueStep, setValueStep] = useState(0);

  const value = useMemo(() => {
    return {
      valueStep,
      setValueStep,
    };
  }, [valueStep, setValueStep]);

  return (
    <StepsProgressContext.Provider value={value}>
      {children}
    </StepsProgressContext.Provider>
  );
};

export default StepsProgressProvider;