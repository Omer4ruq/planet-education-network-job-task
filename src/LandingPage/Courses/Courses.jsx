import courses from "../../../public/course1.png";
import dot from "../../../public/dot.png";
import video from "../../../public/video.png";

const Courses = () => {
  return (
    <div id="courses" className="mt-[120px]">
      <div className="flex justify-center gap-[150px]">
        <img src={courses} alt="" />
        <div className="max-w-[790px]">
          <h1 className="text-[64px] text-white font-black uppercase">
            What will you <br /> study?
          </h1>
          <p className="text-white text-[24px] my-10">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex items-center gap-[22px]">
            <button className="text-[#061665] bg-[#8EC8EE] text-[24px] font-black px-[38px] py-4">
              View Courses
            </button>
            <button className="border border-[#8EC8EE] text-[#8EC8EE] text-[24px] font-black p-4">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start mt-[200px]">
        <div className=" max-w-[535px] relative">
          <img className="absolute left-[-15%]" src={dot} alt="" />
          <img
            className="absolute bottom-0 rotate-[180deg] right-[180px]"
            src={dot}
            alt=""
          />
          <h1 className="text-[64px] font-black text-white py-24">
            A World where <br />
            <span className="text-[#8EC8EE]">EVERYONE has</span> <br /> the{" "}
            <span className="text-[#8EC8EE]">opportunity</span> <br />
            to fulfil their potential
          </h1>
        </div>
        <div className="">
          <img src={video} className="hover:cursor-pointer" alt="" />
          <div className="py-[70px] px-[50px] bg-[#061665] flex justify-between items-center max-w-[850px] translate-x-[250px] translate-y-[-70px]">
            <h2 className="text-[40px] text-[#8EC8EE] font-black">There's Still Time <br /> to Apply for <br /> September 2025</h2>
            <button className="text-[#061665] bg-[#8EC8EE] text-[20px] font-black px-[64px] py-4">
              View Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
