import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import img1 from '../../../public/img1.png'
import img2 from '../../../public/img2.png'
import img3 from '../../../public/img3.png'

const CampusLocations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);


  const campuses = [
    {
      id: 1,
      name: 'CANARY WHARF',
      location: '244.46 × 40.26',
      image: img1,
      description: 'Modern business professionals in motion'
    },
    {
      id: 2,
      name: 'BOROUGH',
      location: 'Central Location',
      image: img2,
      description: 'Contemporary office building'
    },
    {
      id: 3,
      name: 'MANCHESTER',
      location: 'City Center',
      image: img3,
      description: 'Historic architecture meets modern design'
    }
  ];

  const labels = [
    { text: 'CANARY WHARF', position: 'top-12 left-[6%] md:top-48', rotation: '-rotate-3', color: 'bg-[#FF379E]', textColor: 'text-white'  },
    { text: 'BOROUGH', position: 'top-24 right-8 md:top-72 md:right-32', rotation: 'rotate-2', color: 'bg-[#8EC8EE]', textColor: 'text-[#061665]' },
    { text: 'MANCHESTER', position: 'bottom-12 left-[6%] md:bottom-32 md:left-48', rotation: 'rotate-3', color: 'bg-[#00FFD2]', textColor: 'text-[#061665]' }
  ];

  return (
    <div id='campuses' className="min-h-screen  text-white relative overflow-hidden mt-4 md:mt-[200px] ">
      <div className='bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative min-h-[900px] md:h-[717px] mt-16 md:mt-32 py-12'>
        {/* Animated background labels */}
        {labels.map((label, idx) => (
          <div
            key={idx}
            className={`absolute ${label.position} ${label.rotation} ${label.color} ${label.textColor} px-3 py-2 md:px-6 md:py-3 font-bold text-xs md:text-lg tracking-wider shadow-2xl transition-all duration-700 hover:scale-110 hover:rotate-0 opacity-80 z-0`}
          >
            {label.text}
          </div>
        ))}
<div>

</div>
        {/* Main content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-16">
          {/* Campus cards */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-6 mb-12 md:mb-20 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/4">
            {campuses?.map((campus) => (
              <div
                key={campus.id}
                onMouseEnter={() => setHoveredCard(campus.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative w-full max-w-[280px] md:w-[244px] h-[400px] md:h-[483px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-pink-500/20 cursor-pointer"
              >
                {/* Campus image - now as background */}
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="absolute inset-0 w-full h-full object-cover "
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Campus info - positioned at top */}
                <div className="absolute top-0 left-0 right-0 bg-[#8EC8EE] z-20 p-3 md:p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#061665] text-lg md:text-xl font-black tracking-wide">{campus.name}</h3>
                    <ArrowRight 
                      className={`transition-transform duration-500 text-[#061665] w-5 h-5 md:w-6 md:h-6 ${hoveredCard === campus.id ? 'translate-x-2' : ''}`} 
                    />
                  </div>
                </div>

                {/* Hover overlay with description */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-blue-950 to-transparent transition-all duration-500 z-20 ${hoveredCard === campus.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {/* <p className="text-sm text-gray-300">{campus.description}</p> */}
                </div>
              </div>
            ))}
          </div>

          {/* Title and description */}
          <div className="text-center max-w-3xl mx-auto mt-8 md:mt-96 px-4">
            <div className="w-fit relative mx-auto mb-6 md:mb-8">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black relative z-10 uppercase">
                CAMPUSES
              </h1>
              <span className="h-4 sm:h-5 md:h-[22px] w-[150px] sm:w-[200px] md:w-[270px] lg:w-[365px] bg-[#8EC8EE] block absolute bottom-1 md:bottom-2 left-0"></span>
            </div>
            
            <p className="text-white text-start text-base md:text-lg lg:text-xl xl:text-2xl ">
              We have multiple locations across the UK, all strategically situated
              in vibrant city centers and easily accessible by public transport.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CampusLocations;