import React from 'react';
import partner1 from '../../../public/london-uni-logo.png'
import partner2 from '../../../public/AUP logo.png'

const Partner = () => {
    return (
        <div id='institutions' className='flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-[100px] mt-10 md:mt-20 lg:mt-[200px] gap-10 md:gap-0'>
            <div className=''>
<div className=" w-fit relative mb-20 md:mb-[200px]  max-w-[560px] ">
          <h1 className="text-white md:text-[64px] sm:text-5xl text-4xl font-black relative z-10 uppercase">Partner Institutions</h1>
          <span className="sm:h-[28px] h-5 md:w-[430px] sm:w-[350px] w-[260px] bg-[#8EC8EE] block absolute md:bottom-2 bottom-1 md:left-[115px] left-0"></span>
</div>
     <p className="text-white text-sm sm:text-base md:text-lg lg:text-[24px]  break-words mt-[100px]">
     Pur partners description here <br/>jfslkjfslkjafklsajfklsajflkjsadlkj`ldkjakldjkldjkldjk`djkl`jdkls`jdkljs`<br />
     kdljskldjksljdklsjdkjsdkjsdkjskdjsljdklsjdklsjdksjdksjkdjskldjklsdjk
     <br />
     sldjksldjklsjdksjdksjdksjdkjskdjskjdklsjdksjdkjskdjskjdksjdkjskdj
     <br />skdjskdksjdks
          </p>
            </div>
            <div className=' gap-12 md:gap-20 -mt-12'>
               
 <img src={partner1} alt="Partner 1" />
                <img src={partner2} alt="Partner 2" />
                
               
            </div>
        </div>
    );
};

export default Partner;