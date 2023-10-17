import { createContext, useContext, useState } from "react";

const DaltonismoContext = createContext();

export function useDaltonismo() {
  return useContext(DaltonismoContext);
}

export function DaltonismoProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return (
    <DaltonismoContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DaltonismoContext.Provider>
  );
}
