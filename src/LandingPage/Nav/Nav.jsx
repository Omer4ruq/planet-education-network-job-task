import { useState } from "react";
import logo from "../../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[1920px] mx-auto md:pt-[56px] pt-5 ">
      <div className="flex justify-between items-center md:pr-20 md:pl-[84px] px-5">
        <div>
          <img className="md:w-[184px] w-[100px] md:h-[69px] object-cover" src={logo} alt="" />
        </div>
        <div>
          <button>
      <GiHamburgerMenu className="text-white md:text-2xl text-xl" />
          </button>
    
        </div>
      </div>
    </nav>
  );
};

export default Nav;
