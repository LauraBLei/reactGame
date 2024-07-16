import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { LocationList } from "../locations/locations";
import { MonstersList } from "../components/enemies";
import { HpBarCharacter, HpBarEnemy } from "../components/hpBar";
import { CharacterContext } from "../hooks/characterContext";
import { Inventory } from "../components/inventory";

export const GamePage = () => {
  const context = useContext(GameContext);

  const currentLocation = LocationList[context.location];

  const bgImageStyle = {
    backgroundImage: `url(${currentLocation.media.src})`,
  };

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div
        className="relative max-w-[1200px] w-full max-h-[1000px] h-full bg-no-repeat bg-cover flex flex-col"
        style={bgImageStyle}
      >
        <div className="max-w-[200px] place-self-end mr-7 mt-6">
          <details>
            <summary className="cursor-pointer list-none text-2xl font-uncial bg-[#d9bf9e] text-black text-center px-4 py-1 border-2 border-black">
              Inventory
            </summary>
            <div className="absolute max-w-[800px] right-8 mt-4 bg-black px-9 py-4 border-2 border-[#d9bf9e] h-[600px] z-10">
              <Inventory />
            </div>
          </details>
        </div>
        <div className="flex justify-center bg-[#d9bf9e] w-auto place-self-center border-2 border-black">
          <h1 className="text-6xl font-uncial px-6 py-1">{context.location}</h1>
        </div>

        {context.fighting ? <EnemyLocation /> : <Location />}
      </div>
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
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex items-center gap-6 absolute bottom-0 mb-[-100px]"
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
          {currentLocation.enemy.map((_, i) => (
            <button
              key={i}
              className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
              onClick={() => {
                context.setFighting(true);
                setPrevLocation(context.location);
                context.setMonsterHP(MonstersList[currentLocation.enemy[i]].hp);
              }}
            >
              Fight {currentLocation.enemy[i]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const EnemyLocation = () => {
  const CContext = useContext(CharacterContext);
  const context = useContext(GameContext);
  console.log(context.PrevLocation);
  console.log(context.fighting);

  const prevLocation = LocationList[context.PrevLocation];
  const enemy = MonstersList[prevLocation.enemy[0]];
  const character = CContext.character;

  console.log(context.MonsterHP);
  console.log(CContext.currentHP);

  return (
    <div>
      <div></div>
      <div className="w-full flex mt-10">
        <div className="flex justify-between w-full">
          <div className="flex flex-col max-w-[400px] ml-10">
            <img
              className="border-double border-spacing-5 border-8 border-s-4 border-green-600"
              src={character.media.src}
              alt={character.media.alt}
            />
            <HpBarCharacter />
          </div>
          <div className="flex flex-col max-w-[400px] mr-10">
            <img
              className="border-double border-spacing-5 border-8 border-s-4 border-red-700"
              src={enemy.media.src}
              alt={enemy.media.alt}
            />
            <HpBarEnemy />
          </div>
        </div>
      </div>
      {context.MonsterHP <= 0 ? <EnemyDefeated /> : <Fighting />}
    </div>
  );
};

const EnemyDefeated = () => {
  const context = useContext(GameContext);

  const bgText = {
    backgroundImage: `url("./src/assets/bg-images/textbg.png")`,
  };

  return (
    <div
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex flex-col items-center gap-6 absolute bottom-0 mb-[-100px]"
      style={bgText}
    >
      <h2 className="font-uncial text-5xl">Enemy Defeated</h2>
      <div className=" flex gap-10">
        <button
          className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-4xl"
          onClick={() => {
            context.setLocation(context.PrevLocation);
            context.setFighting(false);
          }}
        >
          Return
        </button>
      </div>
    </div>
  );
};

const Fighting = () => {
  const CContext = useContext(CharacterContext);
  const context = useContext(GameContext);
  const characterAttack = CContext.characterAttack;
  const bgText = {
    backgroundImage: `url("./src/assets/bg-images/textbg.png")`,
  };
  const prevLocation = LocationList[context.PrevLocation];

  const enemy = MonstersList[prevLocation.enemy[0]];

  return (
    <div
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex flex-col items-center gap-6 absolute bottom-0 mb-[-100px]"
      style={bgText}
    >
      <div className=" flex gap-10">
        <button
          className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-4xl"
          onClick={() => {
            context.setMonsterHP(context.MonsterHP - characterAttack);
            CContext.setCurrentHP(CContext.currentHP - enemy.attack);
          }}
        >
          Attack
        </button>
        <button
          className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-4xl"
          onClick={() => {
            context.setLocation(context.PrevLocation);
            context.setFighting(false);
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
};
