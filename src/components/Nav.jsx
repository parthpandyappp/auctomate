import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex bg-slate-800 justify-between p-4">
      <Link to="/">
        <h1 className="text-xl text-white cursor-pointer font-bold">
          ❆AuctoMatic
        </h1>
      </Link>
      <div className="flex mr-4 gap-4"></div>
    </nav>
  );
};

export { Nav };
