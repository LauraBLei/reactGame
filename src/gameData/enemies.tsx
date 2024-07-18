import { Media } from "./characters";
import { loot } from "./loot";

export type Monster = {
  hp: number;
  attack: number;
  media: Media;
  loot: loot[];
};

export type MonstersList = {
  [ket: string]: Monster;
};

export enum MonsterNames {
  FeatherLeaf = "Feather Leaf",
  Siren = "Siren",
}

export const MonstersList: MonstersList = {
  "Feather Leaf": {
    hp: 100,
    attack: 5,
    media: {
      src: "./src/assets/enemies/jellyMonster.png",
      alt: "Image of a small little green furry monster",
    },
    loot: [loot.FeatherLeafSkeleton, loot.FeatherLeafFluid],
  },
  Siren: {
    hp: 250,
    attack: 30,
    media: {
      src: "./src/assets/enemies/siren.png",
      alt: "Image of a siren",
    },
    loot: [loot.SirenSkull, loot.SirenScale],
  },
};
