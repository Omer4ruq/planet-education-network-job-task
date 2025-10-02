
const SecNav = () => {
    return (
        <div className="2xl:mt-[195px] mt-20 text-center 2xl:p-[30px] p-5 border border-[#E018E0] mx-auto bg-[#030a2e] flex-nowrap ">
            <a href="#courses" className="text-white uppercase hover:font-black transition-all duration-300 2xl:text-base text-xs text-nowrap mr-[15px]">Courses</a>
            <a href="#campuses" className="text-white uppercase hover:font-black transition-all duration-300 2xl:text-base text-xs text-nowrap mr-[15px]">Campuses</a>
            <a href="#institutions" className="text-white uppercase hover:font-black transition-all duration-300 2xl:text-base text-xs text-nowrap mr-[15px]">Partner institutions</a>
            <br className="block sm:hidden"/>
            <a href="#testimonials" className="text-white uppercase hover:font-black transition-all duration-300 2xl:text-base text-xs text-nowrap mr-[15px]">student testimonials</a>
            <a href="#stories" className="text-white uppercase hover:font-black transition-all duration-300 2xl:text-base text-xs text-nowrap">stories</a>
        </div>
    );
};

export default SecNav;