import { Media } from "./characters";
import { QuestNames } from "./quests";

export type NPC = {
  text: string;
  quests: QuestNames[];
  media: Media;
};

export type NPCListType = {
  [key: string]: NPC;
};

export enum NPCNames {
  OldLady = "Old Lady",
  Bartender = "Bartender",
}

export const NPCList: NPCListType = {
  "Old Lady": {
    text: "Hello friend, could you help me?",
    quests: [QuestNames.SecretIngredient],
    media: {
      src: "./src/assets/npc/oldLady.png",
      alt: "An old lady standing in front of some townhouses, she has a sunhat on, and holding a basket in her hand.",
    },
  },
  Bartender: {
    text: "",
    quests: [],
    media: {
      src: "./src/assets/npc/bartender.png",
      alt: "Image of a male bartender with grey hair, green shirt and brown apron.",
    },
  },
};
