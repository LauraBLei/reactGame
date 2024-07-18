import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { LocationList } from "../locations/locations";
import { MonstersList } from "../gameData/enemies";
import { HpBarCharacter } from "../components/hpBar";
import { CharacterContext } from "../hooks/characterContext";
import { Inventory } from "../components/inventory";
import { Shop, ShopInventory } from "../locations/shop";
import { EnemyLocation } from "../locations/combat";

export const GamePage = () => {
  const context = useContext(GameContext);

  const currentLocation = LocationList[context.location];

  const bgImageStyle = {
    backgroundImage: `url(${currentLocation.media.src})`,
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center">
      <div
        className="relative max-w-[1200px] w-full max-h-[900px] h-full bg-no-repeat bg-cover flex flex-col bg-center"
        style={bgImageStyle}
      >
        {context.location === "Shop" ? <InShop /> : <NormalTop />}

        <div className="flex justify-center bg-[#d9bf9e] w-auto place-self-center border-2 border-black">
          <h1 className="text-6xl font-uncial px-6 py-1">{context.location}</h1>
        </div>

        {context.fighting ? (
          <EnemyLocation />
        ) : context.location === "Shop" ? (
          <Shop />
        ) : (
          <Location />
        )}
      </div>
    </div>
  );
};

const InShop = () => {
  return (
    <div className="mr-7  mt-6 flex justify-between w-full">
      <div className="max-w-[200px] ml-7">
        <details>
          <summary className="cursor-pointer list-none text-2xl font-uncial bg-[#d9bf9e] text-black text-center px-4 py-1 border-2 border-black">
            Shop
          </summary>
          <div className="absolute max-w-[800px] left-8 mt-4 bg-black px-9 py-4 border-2 border-[#d9bf9e] h-[600px] z-10">
            <ShopInventory />
          </div>
        </details>
      </div>
      <div>
        <details>
          <summary className="cursor-pointer list-none text-2xl mr-7 font-uncial bg-[#d9bf9e] text-black text-center px-4 py-1 border-2 border-black">
            Inventory
          </summary>
          <div className="absolute max-w-[800px] right-7 mt-4 bg-black px-9 py-4 border-2 border-[#d9bf9e] h-[600px] z-10">
            <Inventory />
          </div>
        </details>
      </div>
    </div>
  );
};

const NormalTop = () => {
  return (
    <div className="flex mr-7 place-self-end mt-7">
      <details>
        <summary className="cursor-pointer list-none text-2xl mr-7 font-uncial bg-[#d9bf9e] text-black text-center px-4 py-1 border-2 border-black">
          Inventory
        </summary>
        <div className="absolute max-w-[800px] right-7 mt-4 bg-black px-9 py-4 border-2 border-[#d9bf9e] h-[600px] z-10">
          <Inventory />
        </div>
      </details>
    </div>
  );
};

const Location = () => {
  const context = useContext(GameContext);
  const CContext = useContext(CharacterContext);

  const currentLocation = LocationList[context.location];

  const bgText = {
    backgroundImage: `url("./src/assets/bg-images/textbg.png")`,
  };
  const setLocation = context.setLocation;
  const character = CContext.character;
  const setPrevLocation = context.setPrevLocation;
  return (
    <div
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex flex-col items-center gap-6 absolute bottom-0 mb-[-350px]"
      style={bgText}
    >
      <div className="flex items-center justify-between w-full ">
        <div className="overflow-hidden w-full max-w-[250px] max-h-[220px] left-0 bottom-[250px] shadow-2xl">
          <img
            src={character.media.src}
            alt={character.media.alt}
            className="w-full h-full border-4 border-black"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="font-Courier max-h-[220px] overflow-auto ">
            {currentLocation.text.replaceAll("{name}", CContext.name)}
          </p>
          <div className="flex gap-4 mt-4">
            {currentLocation.path.map((_, i) => (
              <button
                key={i}
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  setLocation(currentLocation.path[i]);
                  setPrevLocation(context.location);
                }}
              >
                {currentLocation.path[i]}
              </button>
            ))}
            {currentLocation.enemy.map((_, i) => (
              <button
                key={i}
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  context.setFighting(true);
                  setPrevLocation(context.location);
                  context.setMonsterHP(
                    MonstersList[currentLocation.enemy[i]].hp
                  );
                }}
              >
                Fight {currentLocation.enemy[i]}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <HpBarCharacter />
      </div>
    </div>
  );
};
