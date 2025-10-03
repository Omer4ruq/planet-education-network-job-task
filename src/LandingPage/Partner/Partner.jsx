import React from 'react';
import partner1 from '../../../public/london-uni-logo.png';
import partner2 from '../../../public/AUP logo.png';

const Partner = () => {
  return (
    <div
      id="institutions"
      className="flex flex-col lg:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-[100px] mt-10 md:mt-20 lg:mt-[200px] gap-10 md:gap-16"
    >
      {/* Text Section */}
      <div className="flex-1">
        <div className="w-full max-w-[560px] mb-10 md:mb-[100px] relative">
          <h1 className="text-white text-4xl sm:text-5xl md:text-[64px] font-black relative z-10 uppercase leading-tight">
            Partner <br />
            Institutions
          </h1>
          <span className="block absolute bottom-1 md:bottom-2 left-0 md:left-[2px] w-[260px] sm:w-[350px] md:w-[430px] h-5 sm:h-[28px] bg-[#8EC8EE]"></span>
        </div>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-[24px] break-words mt-6 md:mt-[100px]">
          Pur partners description here <br />
          jfslkjfslkjafklsajfklsajflkjsadlkj`ldkjakldjkldjkldjk`djkl`jdkls`jdkljs`<br />
          kdljskldjksljdklsjdkjsdkjsdkjskdjsljdklsjdklsjdksjdksjkdjskldjklsdjk
          <br />
          sldjksldjklsjdksjdksjdksjdkjskdjskjdklsjdksjdkjskdjskjdksjdkjskdj
          <br />
          skdjskdksjdks
        </p>
      </div>

      {/* Images Section */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-8 items-start justify-start">
        <img
          src={partner1}
          alt="Partner 1"
          className="w-full max-w-[250px] md:max-w-[685px]  object-contain "
        />
        <img
          src={partner2}
          alt="Partner 2"
          className="w-full max-w-[250px] md:max-w-[495px] max-h-[168px] object-contain "
        />
      </div>
    </div>
  );
};

export default Partner;
