
const SecNav = () => {
    return (
        <div className="mt-[195px] flex justify-center items-center gap-[15px] p-[30px] border border-[#E018E0] w-fit mx-auto bg-[#030a2e]">
            <a href="#courses" className="text-white uppercase hover:font-black transition-all duration-300">Courses</a>
            <a href="#campuses" className="text-white uppercase hover:font-black transition-all duration-300">Campuses</a>
            <a href="#institutions" className="text-white uppercase hover:font-black transition-all duration-300">Partner institutions</a>
            <a href="#testimonials" className="text-white uppercase hover:font-black transition-all duration-300">student testimonials</a>
            <a href="#stories" className="text-white uppercase hover:font-black transition-all duration-300">stories</a>
        </div>
    );
};

export default SecNav;