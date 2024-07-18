import { useContext } from "react";
import { useEffect } from "react";
import { CharacterContext } from "../hooks/characterContext";
import { GameContext } from "../hooks/gameContext";
import { MonstersList } from "../gameData/enemies";
import { LocationList, Locations } from "../gameData/locations";
import { HpBarCharacter, HpBarEnemy } from "../components/hpBar";
import { MonsterLootList } from "../gameData/loot";
import { MonsterLoot } from "../gameData/loot";

export const EnemyLocation = () => {
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

export const EnemyDefeated = () => {
  const context = useContext(GameContext);
  const CContext = useContext(CharacterContext);
  const prevLocation = LocationList[context.PrevLocation];
  const enemy = MonstersList[prevLocation.enemy[0]];
  const loot = enemy.loot;

  const bgText = {
    backgroundImage: `url("./src/assets/bg-images/textbg.png")`,
  };

  useEffect(() => {
    const droppedItems = [];
    for (let i = 0; i < loot.length; i++) {
      const e: MonsterLoot = MonsterLootList[loot[i]];

      const r = Math.random();
      console.log(r);

      if (r <= e.dropChance) {
        droppedItems.push(e);
      }
    }

    CContext.setInventory([...CContext.Inventory, ...droppedItems]);
  }, []);

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

export const Fighting = () => {
  const CContext = useContext(CharacterContext);
  const context = useContext(GameContext);
  const characterAttack = CContext.characterAttack;
  const bgText = {
    backgroundImage: `url("./src/assets/bg-images/textbg.png")`,
  };
  const prevLocation = LocationList[context.PrevLocation];

  const enemy = MonstersList[prevLocation.enemy[0]];

  const HandleRespawn = () => {
    context.setLocation(Locations.tavernRoom);
    CContext.setGold(Math.floor(CContext.gold * 0.9));
    context.setFighting(false);
    CContext.setCurrentHP(CContext.maxHP);
  };

  return (
    <div
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex flex-col items-center gap-6 absolute bottom-0 mb-[-100px]"
      style={bgText}
    >
      {CContext.currentHP === 0 ? (
        <div>
          <h2>You died!</h2>
          <button
            className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-4xl"
            onClick={HandleRespawn}
          >
            Respawn
          </button>
        </div>
      ) : (
        <div className=" flex gap-10">
          <button
            className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-4xl"
            onClick={() => {
              const MonsterHP = context.MonsterHP - characterAttack;
              const PlayerHP = CContext.currentHP - enemy.attack;
              context.setMonsterHP(MonsterHP < 0 ? 0 : MonsterHP);
              CContext.setCurrentHP(PlayerHP < 0 ? 0 : PlayerHP);
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
      )}
    </div>
  );
};

export const LootEnemy = () => {
  const context = useContext(GameContext);
  const CContext = useContext(CharacterContext);
  const prevLocation = LocationList[context.PrevLocation];
  const enemy = MonstersList[prevLocation.enemy[0]];

  const loot = enemy.loot;
  loot.map((e) =>
    CContext.setInventory([...CContext.Inventory, MonsterLootList[e]])
  );
};
