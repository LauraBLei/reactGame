import { Media } from "./components/characters";

export type Monster = {
  hp: number;
  attack: number;
  media: Media;
};

export type MonstersList = {
  [ket: string]: Monster;
};

export enum Monsters {
  FeatherLeaf = "Feather Leaf",
}

export const MonstersList: MonstersList = {
  "Feather Leaf": {
    hp: 100,
    attack: 5,
    media: {
      src: "./src/assets/enemies/jellyMonster.png",
      alt: "Image of a small little green furry monster",
    },
  },
};
