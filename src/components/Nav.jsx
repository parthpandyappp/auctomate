import { Link } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { userState } from "../states";

const Nav = () => {
  const authUser = useRecoilValue(userState);
  return (
    <nav className="flex bg-slate-800 justify-between items-center p-3">
      <Link to="/">
        <h1 className="text-xl text-white cursor-pointer font-bold">
          ❆AuctoMate
        </h1>
      </Link>
      <div className="flex mr-4 gap-4 items-center">
        <Link to="registration/asset">
          <MdAddToPhotos className="text-white text-2xl" />
        </Link>
        {authUser?.fname?.length > 0 ? (
          <h1 className="text-white">Welcome, {authUser.fname} 👋</h1>
        ) : (
          <Link to="/auth/login">
            <button className="border text-white rounded px-6 py-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Nav };
