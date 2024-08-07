import { createContext, useState } from "react";
import { LocationList, Locations } from "../gameData/locations";
import { NPCNames } from "../gameData/NPC";
import { Quest } from "../gameData/quests";
import { Media } from "../gameData/characters";

type GameContextType = {
  location: Locations;
  fighting: boolean;
  PrevLocation: Locations;
  MonsterHP: number;
  NPC: NPCNames | null;
  activeQuest: Quest | null;
  bgImage: Media;
  selectedQuest: string;

  setLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setFighting: React.Dispatch<React.SetStateAction<boolean>>;
  setPrevLocation: React.Dispatch<React.SetStateAction<Locations>>;
  setMonsterHP: React.Dispatch<React.SetStateAction<number>>;
  setNPC: React.Dispatch<React.SetStateAction<NPCNames | null>>;
  setActiveQuest: React.Dispatch<React.SetStateAction<Quest | null>>;
  setBgImg: React.Dispatch<React.SetStateAction<Media>>;
  setSelectedQuest: React.Dispatch<React.SetStateAction<string>>;
};
export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const GameProvider = ({ children }: ContextProviderProps) => {
  const [location, setLocation] = useState(Locations.Tavern);
  const [fighting, setFighting] = useState(false);
  const [PrevLocation, setPrevLocation] = useState(Locations.Tavern);
  const [MonsterHP, setMonsterHP] = useState(100);
  const [NPC, setNPC] = useState<NPCNames | null>(null);
  const [activeQuest, setActiveQuest] = useState<Quest | null>(null);
  const [bgImage, setBgImg] = useState(LocationList[Locations.Tavern].media);
  const [selectedQuest, setSelectedQuest] = useState<string>("");

  return (
    <GameContext.Provider
      value={{
        location,
        setLocation,
        fighting,
        setFighting,
        PrevLocation,
        setPrevLocation,
        MonsterHP,
        setMonsterHP,
        NPC,
        setNPC,
        activeQuest,
        setActiveQuest,
        bgImage,
        setBgImg,
        selectedQuest,
        setSelectedQuest,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
