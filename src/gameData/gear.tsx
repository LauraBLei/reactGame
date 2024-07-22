import { Media } from "./characters";
export type ArmorType = {
  name: string;
  media: Media;
  hp: number;
  type: string;
  cost: number;
};

export type WeaponType = {
  name: string;
  media: Media;
  attack: number;
  type: string;
  cost: number;
};

export const armor: ArmorType[] = [
  {
    name: "Sentry's Mail",
    media: {
      src: "./assets/items/gear/armor2.png",
      alt: "chest piece armor",
    },
    hp: 30,
    type: "Chest",
    cost: 10,
  },
  {
    name: "Firelords Mail",
    media: {
      src: "./assets/items/gear/armor1.png",
      alt: "chest piece armor",
    },
    hp: 150,
    type: "Chest",
    cost: 10,
  },
  {
    name: "Serpentbanes rope",
    media: {
      src: "./assets/items/gear/Rope2.png",
      alt: "chest piece armor",
    },
    hp: 250,
    type: "Chest",
    cost: 10,
  },
];

export const hands: ArmorType[] = [
  {
    name: "Sentry's gauntlets",
    media: {
      src: "./assets/items/gear/hands1.png",
      alt: "gauntlets",
    },
    hp: 10,
    type: "Gauntlet",
    cost: 10,
  },
  {
    name: "Firelords Gauntlets",
    media: {
      src: "./assets/items/gear/hands2.png",
      alt: "gauntlets",
    },
    type: "Gauntlet",
    hp: 50,
    cost: 10,
  },
];

export const boots: ArmorType[] = [
  {
    name: "Sentry's Boots",
    media: {
      src: "./assets/items/gear/boots2.png",
      alt: "Boot",
    },
    type: "Boot",
    hp: 10,
    cost: 10,
  },
  {
    name: "Firelords Boots",
    media: {
      src: "./assets/items/gear/boots1.png",
      alt: "Boots",
    },
    hp: 50,
    type: "Boot",
    cost: 10,
  },
];

export const weapons: WeaponType[] = [
  {
    name: "Elderglow Staff",
    media: {
      src: "./assets/items/weapons/staffs/staff2.png",
      alt: "Staff",
    },
    type: "Staff",
    attack: 5,
    cost: 10,
  },
  {
    name: "Serpentbanes staff",
    media: {
      src: "./assets/items/weapons/staffs/staff4.png",
      alt: "Staff",
    },
    type: "Staff",
    attack: 60,
    cost: 10,
  },

  {
    name: "Silverlight Sword",
    media: {
      src: "./assets/items/weapons/daggers/dagger1.png",
      alt: "Sword",
    },
    type: "Sword",
    attack: 10,
    cost: 10,
  },
  {
    name: "Wraithblade",
    media: {
      src: "./assets/items/weapons/daggers/dagger2.png",
      alt: "Sword",
    },
    type: "Sword",
    attack: 30,
    cost: 10,
  },
  {
    name: "Dragonsbane",
    media: {
      src: "./assets/items/weapons/daggers/dagger3.png",
      alt: "Dagger",
    },
    type: "Sword",
    attack: 60,
    cost: 10,
  },
];
