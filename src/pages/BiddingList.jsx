import { BidCard } from "../components";
import { bids } from "../mock data/db-bids";

const BiddingList = () => {
  return (
    <div className="flex flex-col justify-center items-center md:w-full max-w-screen grow md:p-24 p-12">
      <div className="mb-4">
        <h1 className="font-bold text-center text-2xl underline underline-offset-8 ">
          Universal Product Directory
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {bids && bids.map((bid) => <BidCard key={bid.reg_ref} data={bid} />)}
      </div>
    </div>
  );
};

export { BiddingList };
