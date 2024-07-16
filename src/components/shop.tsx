import { armor, hands, boots, weapons } from "./gear";
import { GameContext } from "../hooks/gameContext";
import { CharacterContext } from "../hooks/characterContext";
import { useContext } from "react";
import { LocationList } from "../locations/locations";
import Popup from "reactjs-popup";

export const Shop = () => {
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
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex items-center gap-6 absolute bottom-0 mb-[-310px]"
      style={bgText}
    >
      <div className="overflow-hidden w-full max-w-[250px] max-h-[220px] left-0 bottom-[250px] shadow-2xl">
        <img
          src={character.media.src}
          alt={character.media.alt}
          className="w-full h-full"
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
        </div>
      </div>
    </div>
  );
};

export const ShopInventory = () => {
  return (
    <div className="max-w-[500px] flex flex-wrap gap-6 mt-4 max-h-[800px] overflow-y-auto">
      {armor.map((e, i) => (
        <div>
          <Popup
            trigger={
              <button className="h-[80px] w-[80px] bg-[#d9bf9e]">
                <img key={i} src={`${e.media.src}`} alt="e.media.alt" />
              </button>
            }
          >
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <h3 className="font-uncial text-2xl">Price: {`${e.cost}`}</h3>
              <h3 className="font-uncial text-2xl">
                Attack Bonus: {`${e.hp}`}
              </h3>
            </div>
          </Popup>
        </div>
      ))}
      {hands.map((e, i) => (
        <div>
          <Popup
            trigger={
              <button className="h-[80px] w-[80px] bg-[#d9bf9e]">
                <img key={i} src={`${e.media.src}`} alt="e.media.alt" />
              </button>
            }
          >
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <h3 className="font-uncial text-2xl">Price: {`${e.cost}`}</h3>
              <h3 className="font-uncial text-2xl">HP Bonus: {`${e.hp}`}</h3>
            </div>
          </Popup>
        </div>
      ))}
      {boots.map((e, i) => (
        <div>
          <Popup
            trigger={
              <button className="h-[80px] w-[80px] bg-[#d9bf9e]">
                <img key={i} src={`${e.media.src}`} alt="e.media.alt" />
              </button>
            }
          >
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <h3 className="font-uncial text-2xl">Price: {`${e.cost}`}</h3>
              <h3 className="font-uncial text-2xl">HP Bonus: {`${e.hp}`}</h3>
            </div>
          </Popup>
        </div>
      ))}
      {weapons.map((e, i) => (
        <div>
          <Popup
            trigger={
              <button className="h-[80px] w-[80px] bg-[#d9bf9e]">
                <img key={i} src={`${e.media.src}`} alt="e.media.alt" />
              </button>
            }
          >
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <h3 className="font-uncial text-2xl">Price: {`${e.cost}`}</h3>
              <h3 className="font-uncial text-2xl">Type: {`${e.type}`}</h3>
              <h3 className="font-uncial text-2xl">
                Attack Bonus: {`${e.attack}`}
              </h3>
              <button className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl">
                Buy
              </button>
            </div>
          </Popup>
        </div>
      ))}
    </div>
  );
};
