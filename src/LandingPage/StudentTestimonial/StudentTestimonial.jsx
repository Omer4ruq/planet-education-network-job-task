// StudentTestimonial.jsx
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { faker } from "@faker-js/faker";


import student from "../../../public/student.png";

const StudentTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fakeTestimonials = Array.from({ length: 6 }).map((_, idx) => ({
      id: idx + 1,
      quote: `“ ${faker.lorem.sentence(5)} “`,
      meta: `${faker.person.firstName()} \\ ${faker.number.int({ min: 18, max: 28 })} \\ ${faker.word.words(2)}`,
      img: student, // Using the local image for all testimonials
    }));
    setTestimonials(fakeTestimonials);
  }, []);

  return (
    <div id='testimonials' className="w-full mt-[500px]">
      <div className=" w-fit relative mb-20 md:mb-[200px]  max-w-[560px] md:px-[100px] px-5">
        <h1 className="text-white md:text-[64px] sm:text-5xl text-4xl font-black relative z-10 uppercase">
          Student Testimonials
        </h1>
        <span className="sm:h-[28px] h-5 md:w-[480px] sm:w-[350px] w-[260px] bg-[#8EC8EE] block absolute md:bottom-2 bottom-1 md:left-[115px] left-8"></span>
      </div>

      <Marquee speed={40} gradient={false}>
        {testimonials.map((item, idx) => (
          <div key={idx} className="relative w-fit mr-10">
            <img className=" object-cover" src={item.img} alt="" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-white text-3xl sm:text-5xl font-black max-w-[378px]">
                {item.quote}
              </h1>
              <p className="text-white text-xl my-5">{item.meta}</p>

              {/* social icons আগের মতোই */}
              <div className="flex gap-[10px]">
                {/* facebook */}
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                  <path
                    d="M15 2C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.1 14.73 6 15 6H18V2H15Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* instagram */}
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                  <path
                    d="M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
                {/* linkedin */}
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                  <path
                    d="M6 9V21H2V9H6ZM4 2C2.9 2 2 2.9 2 4C2 5.1 2.9 6 4 6C5.1 6 6 5.1 6 4C6 2.9 5.1 2 4 2ZM22 14V21H18V14C18 12.9 17.1 12 16 12C14.9 12 14 12.9 14 14V21H10V9H14V10.5C14.6 9.6 15.7 9 17 9C19.2 9 21 10.8 21 13V14H22Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default StudentTestimonial;
