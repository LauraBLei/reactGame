import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { pathOne } from "./paths/pathOne";

export const GamePage = () => {
  const context = useContext(GameContext);
  const setLocation = context.setLocation;
  const currentLocation = pathOne[context.location];

  const bgImageStyle = {
    backgroundImage: `url(${currentLocation.media.src})`,
  };

  const bgtext = {
    backgroundImage: `url("./src/assets/bg-images/textbg.png")`,
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div
        className="relative max-w-[1200px] w-full max-h-[1000px] h-full bg-no-repeat bg-cover flex flex-col"
        style={bgImageStyle}
      >
        <div className="flex justify-center">
          <h1 className="text-6xl font-uncial mt-5">{context.location}</h1>
        </div>
        <div>
          {currentLocation?.end && (
            <div className="bg-black bg-opacity-50 flex justify-center items-center py-10 mt-[200px]">
              <h2 className="font-uncial text-6xl text-white">GAME OVER</h2>
            </div>
          )}
        </div>
        <div
          className="mx-10 bg-no-repeat bg-cover h-auto px-[100px] py-10 pt-[100px] flex flex-col items-center absolute bottom-0 mb-[-100px]"
          style={bgtext}
        >
          <p className="font-Courier">
            {currentLocation.text.replaceAll("{name}", context.name)}
          </p>
          <div className="flex gap-4 mt-4">
            {currentLocation.path.map((_, i) => (
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial"
                onClick={() => setLocation(currentLocation.path[i])}
              >
                {currentLocation.path[i]}
              </button>
            ))}
            {/* <button className="border-2 border-black px-4 py-1 cursor-pointer font-uncial" onClick={(event) => { console.log(event.target.innerText); setLocation(currentLocation.path[0])} 
                }>{currentLocation.path[0]}</button>
                <button className="border-2 border-black px-4 py-1 cursor-pointer font-uncial">{currentLocation.path[1]}</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
