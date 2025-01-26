import React, { useRef, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";


const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      author: "Chris",
      role: "President and CEO, PrintReach, USA",
      rating: 4.5,
      avatar: "👤",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane",
      role: "CEO, TechCorp, USA",
      rating: 4,
      avatar: "👩‍💼",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      author: "Mark",
      role: "Founder, InnovateX, UK",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      author: "Alice",
      role: "CTO, DevSolutions, USA",
      rating: 4.8,
      avatar: "👩‍💻",
    },
    {
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      author: "John",
      role: "Manager, BuildWell, Canada",
      rating: 4.2,
      avatar: "👨‍🔧",
    },
  ];

const Testimonial = () => {

    const scrollRef = useRef(null);

  const handleNext = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  const handlePrev = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1C4670] pb-16 pt-8 my-16 text-white">
      <div className=" mx-16 my-8 text-center md:flex items-center justify-between">
        <h1 className="text-4xl font-bold mb-6">What People Say About Us</h1>
        <div className='flex gap-4 justify-center'>
          <button
            onClick={handlePrev}
            className="bg-white text-blue-900 p-3 h-10 w-10 rounded-full items-center justify-center flex hover:bg-yellow-400 hover:text-white hover:border-2"
          >
           <FaChevronLeft className='text-xl'/>
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-blue-900 p-3 h-10 w-10 rounded-full items-center justify-center flex hover:bg-yellow-400 hover:text-white hover:border-2"
          >
            <FaChevronRight className='text-xl'/>
          </button>
        </div>
      </div>

      <div className="px-4 md:px-10">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scroll-smooth gap-6 px-4"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg p-6 flex-shrink-0 w-80 md:w-96"
            >
                <div className='flex items-center justify-between'>
                    <BiSolidQuoteLeft className='text-4xl text-gradient-to-t from-[#1C4670] to-[#edcc12]'/>
                    <div className="flex mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span
                        key={i}
                        className={`text-yellow-500 text-lg ${
                        i < Math.floor(testimonial.rating) ? "" : "opacity-50"
                        }`}
                        >
                    &#9733;
                    </span>
                    ))}
                    </div>
                </div>
                <p className="text-gray-700 mt-4 line-clamp-5 mb-4">{testimonial.text}</p>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-200 text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial