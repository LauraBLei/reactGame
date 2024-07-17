import { Media } from "./characters";

export type MonsterLoot = {
  name: string;
  cost: number;
  dropChance: number;
  media: Media;
};

export type MonsterLootListType = {
  [key: string]: MonsterLoot;
};

export enum loot {
  FeatherLeafSkeleton = "Feather Leaf Skeleton",
  FeatherLeafFluid = "Feather Leaf Fluid",
}

export const MonsterLootList: MonsterLootListType = {
  "Feather Leaf Skeleton": {
    name: "Feather Leaf Skeleton",
    cost: 2,
    dropChance: 1,
    media: {
      src: "./src/assets/items/monsterLoot/15.png",
      alt: "Image of a Feather Leaf Skull",
    },
  },
  "Feather Leaf Fluid": {
    name: "Feather Leaf Fluid",
    cost: 5,
    dropChance: 0.5,
    media: {
      src: "./src/assets/items/Potions/potion4.png",
      alt: "Image of a green potion bottle with leafs on it",
    },
  },
};
