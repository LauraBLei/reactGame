import { Media } from "../../components/characters";

// location: {
//     name: "",
//     text: "",
//     media: {
//         src: "./src/assets/path-images/",
//         alt:"",
//     },
//     path: [""]

// }

export type Path = {
  text: string;
  media: Media;
  path: Locations[];
  end: boolean;
};

export type PathName = {
  [key: string]: Path;
};

export enum Locations {
  EnchantedForest = "Enchanted Forest",
  TheGrove = "The Grove",
  ShadowThicket = "Shadow Thicket",
  PathOfIllumination = "Path Of Illumination",
  VeilOfShadows = "Veil Of Shadows",
  LuminousPool = "Luminous Pool",
  ContinueExploring = "Continue Exploring",
}

export const pathOne: PathName = {
  "Enchanted Forest": {
    text: "You are {name}, a seasoned warrior from the kingdom of Ardania, known for your courage. At the edge of the Enchanted Forest, anticipation fills your heart. Mystical and dangerous, the realm whispers secrets. Three paths await: the heart of the forest with its hidden sanctuary, the ruins of an ancient civilization, or the misty shores of Lake Elysium. Choose wisely, for your decisions shape destiny.",
    media: {
      src: "./src/assets/path-images/enchantedForest.png",
      alt: "Background image of the Enchanted forest",
    },
    path: [Locations.TheGrove, Locations.ShadowThicket],
    end: false,
  },
  "The Grove": {
    text: "{name}'s senses come alive as they explore the grove further. They discover a hidden pool at its center, its waters shimmering with an otherworldly light. Reflections dance upon its surface, revealing glimpses of distant lands and forgotten realms. As Cedric gazes into the pool, they hear the echo of ancient voices whispering secrets of times long past. Among the murmurs, a single voice stands out—a voice filled with sorrow and longing, pleading for release from an ancient curse. {name} realizes that the grove holds the key to unraveling this mystery and freeing the trapped spirit from its eternal torment.",
    media: {
      src: "./src/assets/path-images/theGrove.png",
      alt: "Background image of The Grove",
    },
    path: [Locations.PathOfIllumination, Locations.VeilOfShadows],
    end: false,
  },
  "Shadow Thicket": {
    text: "{name} steps cautiously into the thicket, feeling the air grow heavy with malevolence. Sinister whispers echo through the tangled undergrowth, and shadows coil around them like tendrils of smoke. Within the heart of the thicket lies a hidden clearing—a place untouched by the light of day, where ancient secrets wait to be unveiled.",
    media: {
      src: "./src/assets/path-images/shadowedThicket.png",
      alt: "Background image of the shadowed thicket",
    },
    path: [Locations.EnchantedForest],
    end: false,
  },
  "Path Of Illumination": {
    text: "{name} steps onto the Path of Illumination, drawn by the mystical glow illuminating the way ahead. As they venture deeper into the heart of the Whispering Woods, the path becomes enveloped in an ethereal light, casting long shadows that dance amidst the trees.The gentle glow guides {name} through winding pathways and verdant clearings, each step filled with wonder and anticipation. They feel as though they are walking through a realm untouched by time, where magic and mystery intertwine. As they journey onward, {name} comes upon a serene glade bathed in a soft, otherworldly light. In the center of the glade stands a luminous pool, its surface shimmering with iridescent hues, beckoning {name} to approach.",
    media: {
      src: "./src/assets/path-images/pathOfIllumination.png",
      alt: "Background image of the path of illumination",
    },
    path: [Locations.LuminousPool, Locations.ContinueExploring],
    end: false,
  },
  "Luminous Pool": {
    text: "As {name} leans closer to peer into the depths of the luminous pool, they are suddenly engulfed by a blinding flash of light. In an instant, they feel a powerful force pulling them into the depths of the pool, their senses overwhelmed by the overwhelming energy. With a gasp, {name} finds themselves suspended in a timeless void, surrounded by swirling currents of magic. The weight of the unknown presses upon them, filling them with a sense of unease and uncertainty. In the depths of the pool, {name} struggles to maintain their grasp on reality, their consciousness adrift in the sea of infinite possibilities. Time loses its meaning as they drift further into the unknown, unsure of what lies ahead.",
    media: {
      src: "./src/assets/path-images/luminousPool.png",
      alt: "image of a luminous pool",
    },
    path: [Locations.EnchantedForest],
    end: true,
  },
};
