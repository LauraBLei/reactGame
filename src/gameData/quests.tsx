import { QuestItemNames } from "./questItems";

export type Quest = {
  FirstText: string;
  description: string;
  reward: number;
  questItem: QuestItemNames[];
  status: "not started" | "in progress" | "completed";
};

export type QuestListType = {
  [key: string]: Quest;
};

export enum QuestNames {
  SecretIngredient = "Secret Ingredient",
}

export const QuestList: QuestListType = {
  "Secret Ingredient": {
    FirstText: "Secret Ingredient",
    description:
      "I want to make my famous meal, but none of the stores have any! The meat are from the little Feather Leafs in the cave, but that is way to dangerous for an old lady like me. Could i bother you with fetching some for me? one should be plenty!",
    reward: 10,
    questItem: [QuestItemNames.FeatherLeafMeat],
    status: "not started",
  },
};
