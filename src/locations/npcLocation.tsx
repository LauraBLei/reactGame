import { useContext } from "react";
import { GameContext } from "../hooks/gameContext";
import { NPCList } from "../gameData/NPC";
import { LocationList } from "../gameData/locations";
import { QuestList } from "../gameData/quests";

export const NPCLocation = () => {
  const context = useContext(GameContext);
  const npc = NPCList[context.NPC ?? ""];
  const Quest = QuestList[context.selectedQuest ?? ""];
  const bgText = {
    backgroundImage: `url("./src/assets/bg-images/textbg.png")`,
  };

  const handleLeave = () => {
    context.setBgImg(LocationList[context.PrevLocation].media);
    context.setLocation(context.PrevLocation);
    context.setNPC(null);
  };

  const handleAcceptQuest = () => {
    if (context.activeQuest === null) {
      context.setActiveQuest(QuestList[context.selectedQuest ?? ""]);
      alert("you have accepted the quest");
      handleLeave();
    } else alert("You already have an unfinished quest!");
  };

  return (
    <div
      className="bg-no-repeat bg-cover w-full h-auto px-[60px] py-10 pt-[100px] flex flex-col items-center gap-6 absolute bottom-0 mb-[-350px]"
      style={bgText}
    >
      <div className="place-self-start flex gap-10">
        <button
          className="button"
          onClick={() => {
            handleLeave();
          }}
        >
          Leave
        </button>
        <h2 className="font-uncial text-3xl">{context.NPC}</h2>
      </div>
      {context.selectedQuest ? (
        <div className="flex flex-col justify-center items-center gap-6 mb-4">
          <h3 className="font-Courier font-bold text-3xl">
            {context.selectedQuest}
          </h3>
          <p className="font-Courier text-2xl">{Quest.description}</p>
          <div className="flex items-center">
            <h3 className="font-Courier font-bold text-3xl">
              Reward: {Quest.reward}
            </h3>
            <img
              className="w-[50px]"
              src="./src/assets/items/coins/gold.png"
              alt="Image og gold coins"
            />
          </div>
          <div className="flex gap-6">
            <button onClick={() => handleAcceptQuest()} className="button">
              Accept
            </button>
            <button
              onClick={() => {
                handleLeave;
              }}
              className="button"
            >
              Decline
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <p className="font-Courier text-3xl">{npc.text}</p>
          <div className="flex gap-4 items-center">
            <h3 className="font-Courier text-3xl">Quests:</h3>
            {npc.quests.map((e, i) => (
              <button
                key={i}
                className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
                onClick={() => {
                  context.setSelectedQuest(e);
                }}
              >
                {e}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
