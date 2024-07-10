/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        world: "url('./src/assets/bg-images/Game_world.png')",
      },
      fontFamily: {
        uncial: ['"Uncial Antiqua"', "system-ui"],
        Courier: ['"Courier Prime"', "system-ui"],
      },
    },
  },
  plugins: [],
};
