import { createContext, useState } from "react";
import { Locations } from "../pages/paths/pathOne";


type GameContextType = {
    name: string;
    location: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setLocation:React.Dispatch<React.SetStateAction<Locations>>
};
export const GameContext = createContext<GameContextType>({} as GameContextType);

type ContextProviderProps = {
    children: React.ReactNode;
  };

export const GameProvider = ({ children }:ContextProviderProps) => {
  const [name, setName] = useState("Tompe");
  const [location, setLocation] = useState(Locations.EnchantedForest)
  return (
    <GameContext.Provider value={{ name, setName, location, setLocation}}>
      {children}
    </GameContext.Provider>
  );
};

