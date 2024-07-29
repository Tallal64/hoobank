import { airbnb, binance, coinbase, dropbox } from "../assets";

const Clients = () => {
  return (
    <section
      id="clients"
      className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-4 justify-center items-center gap-10 my-28 w-full"
    >
      <div className="flex justify-center w-full">
        <img
          src={airbnb}
          alt="airbnb"
          className="w-1/2 h-1/2 ss:w-2/3 ss:h-2/3 object-contain cursor-pointer"
        />
      </div>

      <div className="flex justify-center w-full">
        <img
          src={binance}
          alt="binance"
          className="w-1/2 h-1/2 ss:w-2/3 ss:h-2/3 object-contain cursor-pointer"
        />
      </div>

      <div className="flex justify-center w-full">
        <img
          src={coinbase}
          alt="coinbase"
          className="w-1/2 h-1/2 ss:w-2/3 ss:h-2/3 object-contain cursor-pointer"
        />
      </div>

      <div className="flex justify-center w-full">
        <img
          src={dropbox}
          alt="dropbox"
          className="w-1/2 h-1/2 ss:w-2/3 ss:h-2/3 object-contain cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Clients;
