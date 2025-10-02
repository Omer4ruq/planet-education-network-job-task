import React from 'react';
import stories1 from '../../../public/stories1.png'
import stories2 from '../../../public/stories2.png'

const Stories = () => {
    return (
        <div className='px-[100px] mt-[200px]'>
            <div>
                <h1 className="text-[64px] text-white font-black uppercase">
                    stories
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[150px] mt-[43px]'>
<div>
    <img src={stories1} alt="" />
</div>
<div className='-mt-6'>
    <h1 className="text-[64px] text-white font-black uppercase ">Induction in VCAD Canary Wharf campus</h1>
     <p className="text-white text-[24px] my-10">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex items-center gap-[22px]">
            <button className="text-[#061665] bg-[#8EC8EE] text-[24px] font-black px-[38px] py-4">
              Read article
            </button>
            <button className="border border-[#8EC8EE] text-[#8EC8EE] text-[24px] font-black p-4">
              View full gallery
            </button>
    </div>
    
</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[150px] mt-[43px]'>
                <div>
                    <img src={stories2} alt="" />
                </div>
                <div className='-mt-6'>
                   <h1 className="text-[64px] text-white font-black uppercase">Be ready for 
                    <br />applying! Five tips to 
                    <br /><span className='text-[#E018E0]'>build your portfolio</span> </h1>
     <p className="text-white text-[24px] my-10">
          If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.
          </p>
          <div className="flex items-center gap-[22px]">
            <button className="text-[#061665] bg-[#8EC8EE] text-[24px] font-black px-[38px] py-4">
              Read article
            </button>
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;