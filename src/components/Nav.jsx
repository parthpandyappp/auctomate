import { Link } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md";
const Nav = () => {
  return (
    <nav className="flex bg-slate-800 justify-between p-4">
      <Link to="/">
        <h1 className="text-xl text-white cursor-pointer font-bold">
          ❆AuctoMate
        </h1>
      </Link>
      <div className="flex mr-4 gap-4 items-center">
        <Link to="registration/asset">
          <MdAddToPhotos className="text-white text-2xl" />
        </Link>
      </div>
    </nav>
  );
};

export { Nav };
