import logo from "../../../public/logo.png";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";

const Footer = () => {
  return (
    <footer className="md:pb-[90px] pb-10">
      <div className="xl:flex justify-between items-center md:pr-20 md:pl-[84px] px-5">
        <div className="xl:mb-0 mb-5">
          <img className="md:w-[184px] w-[100px] md:h-[69px] object-cover" src={logo} alt="" />
          <p className="text-white mt-4 md:text-base text-xs">
            © 2025 Victoria College of Arts and Design, All rights reserved.
          </p>
        </div>
        <div className="text-[#8EC8EE] md:border md:border-[#8EC8EE] md:px-[37px] md:py-[14.5px] flex md:flex-row flex-col md:gap-0 gap-5">
          <a href="/" className="mr-[42px] md:text-base text-xs">
            Policies
          </a>
          <a href="/" className="mr-[32px] md:text-base text-xs">
            Contact us
          </a>
          <a href="/" className="mr-[30px] md:text-base text-xs">
            Meet the Team
          </a>
          <div className="flex items-center gap-[10px]">
            <a href="/">
              {" "}
              <img
                className="md:w-[24px] md:h-[24px] w-5 object-cover"
                src={facebook}
                alt=""
              />
            </a>
            <a href="/">
              {" "}
              <img
                className="md:w-[24px] md:h-[24px] w-5 object-cover"
                src={instagram}
                alt=""
              />
            </a>
            <a href="/">
              {" "}
              <img
                className="md:w-[24px] md:h-[24px] w-5 object-cover"
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
