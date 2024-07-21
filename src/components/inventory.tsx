import { useContext } from "react";
import { CharacterContext } from "../hooks/characterContext";
import Popup from "reactjs-popup";
import { GameContext } from "../hooks/gameContext";
import { ArmorType, WeaponType } from "../gameData/gear";
import { MonsterLoot } from "../gameData/loot";

export const Inventory = () => {
  const CContext = useContext(CharacterContext);
  const context = useContext(GameContext);

  const handleSelling = (e: WeaponType | ArmorType | MonsterLoot) => {
    CContext.setGold(CContext.gold + e.cost);
    CContext.setInventory(
      CContext.Inventory.filter((invItem) => invItem.name !== e.name)
    );
  };

  const handleEquip = (e: WeaponType | ArmorType) => {
    if ("attack" in e) {
      // Equipping a weapon
      if (CContext.weapon) {
        handleUnequip(e);
      }
      CContext.setWeapon(e);
      CContext.setCharacterAttack(CContext.characterAttack + e.attack);
    } else {
      // Equipping an armor piece
      if (e.type === "Gauntlet" && CContext.gauntlet) {
        handleUnequip(e);
      } else if (e.type === "Boot" && CContext.boots) {
        handleUnequip(e);
      } else if (e.type === "Chest" && CContext.chest) {
        handleUnequip(e);
      }

      if (e.type === "Gauntlet") {
        CContext.setGauntlet(e);
        CContext.setMaxHP(CContext.maxHP + e.hp);
      } else if (e.type === "Boot") {
        CContext.setBoots(e);
        CContext.setMaxHP(CContext.maxHP + e.hp);
      } else if (e.type === "Chest") {
        CContext.setChest(e);
        CContext.setMaxHP(CContext.maxHP + e.hp);
      }
    }

    CContext.setInventory((prevInventory) =>
      prevInventory.filter((invItem) => invItem.name !== e.name)
    );
  };

  const handleUnequip = (e: WeaponType | ArmorType | null) => {
    if (e === null) {
      return;
    }
    if ("attack" in e) {
      // Equipping a weapon
      if (CContext.weapon) {
        CContext.setInventory([...CContext.Inventory, CContext.weapon]);
      }
      CContext.setWeapon(null);
      CContext.setCharacterAttack(CContext.characterAttack + e.attack);
    } else {
      // Equipping an armor piece
      if ("Gauntlet" in e && CContext.gauntlet) {
        CContext.setInventory([...CContext.Inventory, CContext.gauntlet]);
        CContext.setMaxHP(CContext.maxHP - e.hp);
      } else if (e.type === "Boot" && CContext.boots) {
        CContext.setInventory([...CContext.Inventory, CContext.boots]);
        CContext.setMaxHP(CContext.maxHP - e.hp);
      } else if (e.type === "Chest" && CContext.chest) {
        CContext.setInventory([...CContext.Inventory, CContext.chest]);
        CContext.setMaxHP(CContext.maxHP - e.hp);
      }

      if (e.type === "Gauntlet") {
        CContext.setGauntlet(null);
      } else if (e.type === "Boot") {
        CContext.setBoots(null);
      } else if (e.type === "Chest") {
        CContext.setChest(null);
      }
    }
  };

  const equippedWeapon = CContext.weapon;

  const equippedBoots = CContext.boots;

  const equippedChest = CContext.chest;

  const equippedGauntlets = CContext.gauntlet;

  return (
    <div>
      <div className="flex mb-6">
        <div className="flex">
          <img
            className="w-[50px] h-[50px]"
            src="./src/assets/items/coins/gold.png"
            alt="Image og gold coins"
          />
          <h2 className="text-white font-uncial text-2xl">{CContext.gold}</h2>
        </div>
      </div>

      <div className="flex gap-6 mb-8">
        <Popup
          trigger={
            <button className="h-[90px] w-[90px] bg-[#d9bf9e]">
              <img
                src={equippedChest?.media.src}
                alt={equippedChest?.media.alt}
              />
            </button>
          }
        >
          {equippedChest && (
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  handleUnequip(CContext.chest);
                }}
              >
                Unequip
              </button>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button className="h-[90px] w-[90px] bg-[#d9bf9e]">
              <img
                src={equippedGauntlets?.media.src}
                alt={equippedGauntlets?.media.alt}
              />
            </button>
          }
        >
          {equippedGauntlets && (
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  handleUnequip(CContext.gauntlet);
                }}
              >
                Unequip
              </button>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button className="h-[90px] w-[90px] bg-[#d9bf9e]">
              <img
                src={equippedBoots?.media.src}
                alt={equippedBoots?.media.alt}
              />
            </button>
          }
        >
          {equippedBoots && (
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  handleUnequip(CContext.boots);
                }}
              >
                Unequip
              </button>
            </div>
          )}
        </Popup>
        <Popup
          trigger={
            <button className="h-[90px] w-[90px] bg-[#d9bf9e]">
              <img
                src={equippedWeapon?.media.src}
                alt={equippedWeapon?.media.alt}
              />
            </button>
          }
        >
          {equippedWeapon && (
            <div className="bg-[#d9bf9e] border-2 border-black p-2">
              <button
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  handleUnequip(CContext.weapon);
                }}
              >
                Unequip
              </button>
            </div>
          )}
        </Popup>
      </div>
      <div className="overflow-y-auto max-h-[300px]  flex gap-6">
        {CContext.Inventory.length > 0 ? (
          CContext.Inventory.map((e, i) => (
            <Popup
              trigger={
                <button className="h-[80px] w-[80px] bg-[#d9bf9e]">
                  <img key={i} src={e.media.src} alt={e.media.alt} />;
                </button>
              }
            >
              <div className="bg-[#d9bf9e] border-2 border-black p-2">
                <h3 className="font-uncial text-2xl">Price: {`${e.name}`}</h3>

                <h3 className="font-uncial text-2xl">Price: {`${e.cost}`}</h3>
                {"hp" in e && (
                  <>
                    <h3 className="font-uncial text-2xl">
                      HP Bonus: {`${e.hp}`}
                    </h3>
                  </>
                )}
                {"attack" in e && (
                  <>
                    <h3 className="font-uncial text-2xl">
                      Type: {`${e.type}`}
                    </h3>
                    <h3 className="font-uncial text-2xl">
                      Attack Bonus: {`${e.attack}`}
                    </h3>
                  </>
                )}
                <div className="flex gap-6">
                  {context.location === "Shop" && (
                    <button
                      className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                      onClick={() => {
                        handleSelling(e);
                      }}
                    >
                      sell
                    </button>
                  )}
                  {"attack" in e && "hp" in e && (
                    <button
                      className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                      onClick={() => {
                        handleEquip(e);
                      }}
                    >
                      Equip
                    </button>
                  )}
                </div>
              </div>
            </Popup>
          ))
        ) : (
          <div>
            <h2 className="text-center text-2xl font-uncial text-white bg-black">
              Your Inventory Is Empty!
            </h2>
          </div>
        )}
        {}
      </div>
    </div>
  );
};
