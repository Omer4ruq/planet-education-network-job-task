import courses from "../../../public/course1.png";
import dot from "../../../public/dot.png";
import video from "../../../public/video.png";

const Courses = () => {
  return (
    <div
      id="courses"
      className="2xl:mt-[120px] mt-20 md:pr-20 md:pl-[84px] px-5 max-w-[1920px] mx-auto"
    >
      <div className="flex xl:flex-row flex-col lg:justify-start justify-center 2xl:gap-[150px] gap-20">
        <img className="2xl:max-w-full lg:mx-0 mx-auto" src={courses} alt="" />
        <div className="max-w-[790px]">
          <h1 className="2xl:text-[64px] text-[40px] text-white font-black uppercase">
            What will you <br /> study?
          </h1>
          <p className="text-white 2xl:text-[24px] my-10">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex items-center gap-[22px]">
            <button className="text-[#061665] bg-[#8EC8EE] 2xl:text-[24px] font-black px-[38px] py-4">
              View Courses
            </button>
            <button className="border border-[#8EC8EE] text-[#8EC8EE] 2xl:text-[24px] font-black p-4">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row flex-col justify-center items-start mt-[200px]">
        <div className=" max-w-[535px] relative mb-10">
          <img className="absolute lg:left-[-15%] lg:w-[70px] w-10" src={dot} alt="" />
          <img
            className="absolute bottom-0 rotate-[180deg] right-[180px] lg:w-[70px] w-10"
            src={dot}
            alt=""
          />
          <h1 className="2xl:text-[64px] lg:text-[40px] text-[30px] font-black text-white lg:py-24 py-10 ">
            A World where <br />
            <span className="text-[#8EC8EE]">EVERYONE has</span> the{" "}
            <span className="text-[#8EC8EE]">opportunity</span> to fulfil their
            potential
          </h1>
        </div>
        <div className="relative">
          <img src={video} className="hover:cursor-pointer" alt="" />
          <div className="lg:py-[70px] p-10 lg:px-[50px] bg-[#061665] md:flex justify-between gap-[100px] items-center max-w-[850px] md:absolute right-[-50px] bottom-[-40%]">
            <h2 className="2xl:text-[40px] md:text-[30px] leading-[50px] text-lg text-[#8EC8EE] font-black">
              There's Still Time <br className="md:block hidden"/> to Apply for <br className="md:block hidden"/> September 2025
            </h2>
            <button className="text-[#061665] bg-[#8EC8EE] md:text-[20px] font-black 2xl:px-[64px] py-4 px-4 md:mt-0 mt-5">
              View Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
