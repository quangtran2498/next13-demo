"use client";

import React, { useState, useMemo } from "react";
interface HandleQuestionI {
  valueStep: any;
  setValueStep: any;
}

const StepsProgressContext = React.createContext<HandleQuestionI | null>(null);

export const usePageContext = () => React.useContext(StepsProgressContext);

const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [valueStep, setValueStep] = useState<any>(1);

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

export default PageProvider;