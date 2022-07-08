import landing from "../assets/landing.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center w-full h-screen">
      <div className="flex justify-center w-1/2">
        <img
          src={landing}
          className="text-white w-96 object-cover"
          alt="landing"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-3/5">
        <div className="flex justify-items-start flex-col">
          <h1 className="text-3xl md:text-5xl text-center font-bold">
            ❆AuctoMatic
          </h1>
          <p className="justify-self-start text-base mt-3 text-center md:text-left font-medium">
            Redefining digital bidding & revising e-Auction culture with
            AuctoMatic. A marketplace to bid upon and sell your assets. With
            exclusive swift assistance of prime optimsation for assets having
            highly volatile market values.
          </p>

          <p className="justify-self-start text-base mt-3 font-medium">
            Easy auctions, there you go!
          </p>

          <div className="flex flex-col md:flex-row justify-center mt-14 gap-3">
            <Link to="/listing/biddings/">
              <button className="bg-slate-800 text-white px-6 py-3 rounded font-medium">
                Get Started
              </button>
            </Link>
            <button className="border border-slate-800 px-6 py-2 rounded flex items-center justify-center font-semibold">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                alt="github"
              />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Home };
