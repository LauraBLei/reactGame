export const InventoryList = [""];

export const Inventory = () => {
  return (
    <div>
      <div className="flex justify-evenly mb-6">
        <div className="flex">
          <img
            className="w-[50px] h-[50px]"
            src="./src/assets/items/coins/bronze.png"
            alt="Image of bronze coins"
          />
          <h2 className="text-white font-uncial text-2xl">0</h2>
        </div>
        <div className="flex">
          <img
            className="w-[50px] h-[50px]"
            src="./src/assets/items/coins/silver.png"
            alt="Image of silver coins"
          />
          <h2 className="text-white font-uncial text-2xl">0</h2>
        </div>
        <div className="flex">
          <img
            className="w-[50px] h-[50px]"
            src="./src/assets/items/coins/gold.png"
            alt="Image og gold coins"
          />
          <h2 className="text-white font-uncial text-2xl">0</h2>
        </div>
      </div>
      <div className="flex gap-6 mb-8">
        <div className="w-[90px] h-[90px] bg-[#d9bf9e]">
          <img src="" alt="" />
        </div>
        <div className="w-[90px] h-[90px] bg-[#d9bf9e]">
          <img src="" alt="" />
        </div>
        <div className="w-[90px] h-[90px] bg-[#d9bf9e]">
          <img src="" alt="" />
        </div>
        <div className="w-[90px] h-[90px] bg-[#d9bf9e]">
          <img src="" alt="" />
        </div>
      </div>
      <div className="overflow-y-auto max-h-[300px]">
        {InventoryList.length <= 0 ? (
          InventoryList.map((_, i) => (
            <div className="h-[60px] w-[60px]">
              <img key={i} src="i.media.src" alt="i.media.alt" />
            </div>
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
