import React from 'react';
import stories1 from '../../../public/stories1.png'
import stories2 from '../../../public/stories2.png'

const Stories = () => {
    return (
        <div id='stories' className='px-4 sm:px-8 md:px-16 lg:px-[100px] mt-10 md:mt-20 lg:mt-[200px]'>
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-white font-black uppercase">
                    stories
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 xl:gap-[150px] mt-4 md:mt-[43px]'>
<div>
    <img src={stories1} alt="" className="mx-w-[677px] mx-h-[709px]" />
</div>
<div className='mt-2 '>
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-white font-black uppercase ">Induction in VCAD Canary Wharf campus</h1>
     <p className="text-white text-sm sm:text-base md:text-lg lg:text-[24px] my-4 md:my-10">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex items-center gap-2 sm:gap-[22px] flex-wrap">
            <button className="text-[#061665] bg-[#8EC8EE] text-sm sm:text-base md:text-lg lg:text-[24px] font-black px-4 sm:px-[38px] py-2 sm:py-4">
              Read article
            </button>
            <button className="border border-[#8EC8EE] text-[#8EC8EE] text-sm sm:text-base md:text-lg lg:text-[24px] font-black p-2 sm:p-4">
              View full gallery
            </button>
    </div>
    
</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 xl:gap-[150px] mt-4 md:mt-[43px]'>
                <div>
                    <img src={stories2} alt="" className="mx-w-[677px] mx-h-[709px]" />
                </div>
                <div className='mt-2 '>
                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-white font-black uppercase">Be ready for 
                    <br className="hidden sm:block"/>applying! Five tips to 
                    <br className="hidden md:block"/><span className='text-[#E018E0]'>build your portfolio</span> </h1>
     <p className="text-white text-sm sm:text-base md:text-lg lg:text-[24px] my-4 md:my-10">
          If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.
          </p>
          <div className="flex items-center gap-2 sm:gap-[22px] flex-wrap">
            <button className="text-[#061665] bg-[#8EC8EE] text-sm sm:text-base md:text-lg lg:text-[24px] font-black px-4 sm:px-[38px] py-2 sm:py-4">
              Read article
            </button>
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;