import { Media } from "../gameData/characters";
import { MonsterNames } from "../gameData/enemies";

export type Location = {
  text: string;
  media: Media;
  path: Locations[];
  enemy: MonsterNames[];
};

export type LocationType = {
  [key: string]: Location;
};

export enum Locations {
  Tavern = "Tavern",
  outsideTavern = "Ironwood Avenue",
  BackGate = "Ironwood Gate",
  EmeraldPlaza = "Emerald Plaza",
  CityGates = "Tomplania City Gates",
  EvershadeForest = "Evershade Forest",
  TheCrystalCaves = "Crystal Caves",
  ElderglowLake = "Elderglow Lake",
  Eldervale = "Eldervale",
  CircleOfTheGods = "Circle Of The Gods",
  AetherPeak = "Aether Peak",
  EaglesPeak = "Eagles Peak",
  shop = "Shop",
  tavernRoom = "Tavern Room",
}

export const LocationList: LocationType = {
  Tavern: {
    text: "This is the tavern",
    media: {
      src: "./src/assets/village/tavern.png",
      alt: "",
    },
    path: [Locations.outsideTavern],
    enemy: [],
  },
  "Ironwood Avenue": {
    text: "Ironwood Avenue",
    media: {
      src: "./src/assets/village/ironwoodAvenue.png",
      alt: "",
    },
    path: [Locations.EmeraldPlaza, Locations.Tavern, Locations.BackGate],
    enemy: [],
  },
  "Emerald Plaza": {
    text: "Emerald Plaza",
    media: {
      src: "./src/assets/village/EmeraldPlaza.png",
      alt: "",
    },
    path: [Locations.outsideTavern, Locations.CityGates, Locations.shop],
    enemy: [],
  },
  "City Gates": {
    text: "City Gates",
    media: {
      src: "./src/assets/village/backGate.png",
      alt: "",
    },
    path: [Locations.EmeraldPlaza, Locations.Eldervale],
    enemy: [],
  },
  "Ironwood Gate": {
    text: "Ironwood Gate",
    media: {
      src: "./src/assets/village/backGate.png",
      alt: "",
    },
    path: [Locations.EvershadeForest, Locations.outsideTavern],
    enemy: [],
  },
  Eldervale: {
    text: "Eldervale",
    media: {
      src: "",
      alt: "",
    },
    path: [
      Locations.CityGates,
      Locations.CircleOfTheGods,
      Locations.EaglesPeak,
      Locations.AetherPeak,
    ],
    enemy: [],
  },
  "Circle Of The Gods": {
    text: "Circle Of The Gods",
    media: {
      src: "",
      alt: "",
    },
    path: [Locations.Eldervale],
    enemy: [],
  },
  "Evershade Forest": {
    text: "Evershade Forest",
    media: {
      src: "./src/assets/world/enchantedForest.png",
      alt: "",
    },
    path: [
      Locations.TheCrystalCaves,
      Locations.BackGate,
      Locations.ElderglowLake,
    ],
    enemy: [],
  },
  "Crystal Caves": {
    text: "Crystal Caves",
    media: {
      src: "./src/assets/world/crystalCave.png",
      alt: "",
    },
    path: [Locations.EvershadeForest],
    enemy: [MonsterNames.FeatherLeaf],
  },
  "Elderglow Lake": {
    text: "Elderglow Lake",
    media: {
      src: "./src/assets/world/elderglowLake.png",
      alt: "",
    },
    path: [Locations.EvershadeForest],
    enemy: [MonsterNames.Siren],
  },
  Shop: {
    text: "Shop",
    media: {
      src: "./src/assets/village/shop.png",
      alt: "",
    },
    path: [Locations.EmeraldPlaza],
    enemy: [],
  },
  "Tavern Room": {
    text: "You were found unconscious by a villager and brought to a room at the Tavern, the doctor took a look at you, but it cost you some money.",
    media: {
      src: "./src/assets/village/tavernRoom.png",
      alt: "Image of a tavern room with a double bed, a fireplace and a window with a nice view of some mountains.",
    },
    path: [Locations.Tavern],
    enemy: [],
  },
};
