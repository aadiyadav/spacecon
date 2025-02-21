import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-2 h-16 border-b-3 flex justify-between items-center bg-violet-600 border-yellow-500 px-10 fixed top-0 left-0 right-0 z-10">
      <div className="cursor-pointer w-80">
        <img src="src/assets/logo.png" alt="" />
      </div>
      <div className="space-x-10 text-lg flex justify-center items-center">
        <div className="cursor-pointer mr-32 font-bold px-4 py-1 border border-black rounded-md hover:bg-black hover:text-yellow-200 transition-all duration-300">
          Dive In
        </div>
        <div className="cursor-pointer font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
          About us
        </div>
        <div className="btn">
          <div className="btn-text-one">Login</div>
          <div className="btn-text-two">Sign-In</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
