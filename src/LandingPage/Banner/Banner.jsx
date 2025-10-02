import banner from "../../../public/banner.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[816px]">
        <h1 className="text-[150px] font-black uppercase text-white">
          welcome <br /> to VCAD
        </h1>
        <p className="text-2xl text-white mb-[36px]">
          Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas. We work with a
          variety of experts and esteemed companies using a collaborative
          approach. Located in London's Design District, we have valuable
          connections within our industry. Search our latest courses.
        </p>
        <button className="text-[#061665] text-[24px] font-black bg-[#8EC8EE] px-[58px] py-4">
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
