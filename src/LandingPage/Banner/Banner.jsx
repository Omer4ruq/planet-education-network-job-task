import banner from "../../../public/banner.png";

const Banner = () => {
  return (
    <div className="flex xl:flex-row flex-col-reverse items-center justify-center md:pr-20 md:pl-[84px] px-5 2xl:mt-0 mt-10">
      <div className="max-w-[816px] 2xl:mt-0 mt-10">
        <h1 className="2xl:text-[150px] text-[50px] font-black uppercase text-white">
          welcome <br className="xl:block hidden"/> to VCAD
        </h1>
        <p className="2xl:text-2xl text-white mb-[36px]">
          Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas. We work with a
          variety of experts and esteemed companies using a collaborative
          approach. Located in London's Design District, we have valuable
          connections within our industry. Search our latest courses.
        </p>
        <button className="text-[#061665] 2xl:text-[24px] font-black bg-[#8EC8EE] 2xl:px-[58px] 2xl:py-4 p-3 px-5">
          Apply Now
        </button>
      </div>
      <div className="relative">
        <img className="" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
