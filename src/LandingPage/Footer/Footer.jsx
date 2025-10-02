import logo from "../../../public/logo.png";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";

const Footer = () => {
  return (
    <footer className="pb-[90px]">
      <div className="flex justify-between items-center pr-20 pl-[84px]">
        <div>
          <img className="w-[184px] h-[69px] object-cover" src={logo} alt="" />
          <p className="text-white mt-4">
            © 2025 Victoria College of Arts and Design, All rights reserved.
          </p>
        </div>
        <div className="text-[#8EC8EE] border border-[#8EC8EE] px-[37px] py-[14.5px] flex">
          <a href="/" className="mr-[42px]">
            Policies
          </a>
          <a href="/" className="mr-[32px]">
            Contact us
          </a>
          <a href="/" className="mr-[30px]">
            Meet the Team
          </a>
          <div className="flex items-center gap-[10px]">
            <a href="/">
              {" "}
              <img
                className="w-[24px] h-[24px] object-cover"
                src={facebook}
                alt=""
              />
            </a>
            <a href="/">
              {" "}
              <img
                className="w-[24px] h-[24px] object-cover"
                src={instagram}
                alt=""
              />
            </a>
            <a href="/">
              {" "}
              <img
                className="w-[24px] h-[24px] object-cover"
                src={linkedin}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
