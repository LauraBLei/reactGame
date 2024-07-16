import { createContext, useState } from "react";
import { Character, characters } from "../components/characters";

type characterContextType = {
  name: string;
  characterAttack: number;
  currentHP: number;
  character: Character;
  maxHP: number;
  bronze: number;
  silver: number;
  gold: number;

  setName: React.Dispatch<React.SetStateAction<string>>;
  setCharacter: React.Dispatch<React.SetStateAction<Character>>;
  setCharacterAttack: React.Dispatch<React.SetStateAction<number>>;
  setCurrentHP: React.Dispatch<React.SetStateAction<number>>;
  setMaxHP: React.Dispatch<React.SetStateAction<number>>;
  setBronze: React.Dispatch<React.SetStateAction<number>>;
  setSilver: React.Dispatch<React.SetStateAction<number>>;
  setGold: React.Dispatch<React.SetStateAction<number>>;
};

export const CharacterContext = createContext<characterContextType>(
  {} as characterContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const CharacterProvider = ({ children }: ContextProviderProps) => {
  const [name, setName] = useState("Tompe");
  const [character, setCharacter] = useState(characters[0]);
  const [currentHP, setCurrentHP] = useState(100);
  const [characterAttack, setCharacterAttack] = useState(10);
  const [maxHP, setMaxHP] = useState(100);
  const [bronze, setBronze] = useState(0);
  const [silver, setSilver] = useState(0);
  const [gold, setGold] = useState(0);

  return (
    <CharacterContext.Provider
      value={{
        currentHP,
        setCurrentHP,
        characterAttack,
        setCharacterAttack,
        character,
        setCharacter,
        name,
        setName,
        maxHP,
        setMaxHP,
        bronze,
        setBronze,
        silver,
        setSilver,
        gold,
        setGold,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
