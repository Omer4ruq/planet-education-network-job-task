import { useState } from "react";
import logo from "../../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full pt-[56px]">
      <div className="flex justify-between items-center pr-20 pl-[84px]">
        <div>
          <img className="w-[184px] h-[69px] object-cover" src={logo} alt="" />
        </div>
        <div>
          <GiHamburgerMenu className="text-white text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
