import React, { createContext, useState, useContext } from "react";

// 1. Créer le contexte
const GlobalContext = createContext();

// 2. Créer un provider pour envelopper l'app
export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null); // exemple : utilisateur
  const [theme, setTheme] = useState("light"); // exemple : thème global

  return (
    <GlobalContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// 3. Hook pour l’utiliser facilement
export const useGlobal = () => useContext(GlobalContext);
