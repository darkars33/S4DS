import React, { useState } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Amol from '../../../assets/Executive/Amol-Goje.svg';
import Neha from '../../../assets/Executive/Neha-Sharma.svg';
import Amlan from '../../../assets/Executive/Amlan-Chakrabarti.svg';
import { GoTriangleRight } from 'react-icons/go';
import { RxCross2 } from "react-icons/rx";
import { IoLogoLinkedin } from "react-icons/io5";

const Executive = () => {

  const data = [
    {
      id: 1,
      title: "Prof. Amol C. Goje",
      position: "President",
      img: Amol,
      linkedIn: ""
    },
    {
      id: 2,
      title: "Dr. Amlan Chakrabarti",
      position: "Vice President",
      img: Amlan,
      linkedIn: ""
    },
    {
      id: 3,
      title: "Dr. Neha Sharma",
      position: "Secretary",
      img: Neha,
      linkedIn: ""
    },
    {
      id: 4,
      title: "Amol Goje",
      img: Amol,
      linkedIn: ""
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const total = data.length;

  const nextSlide = () => {
    if (currentIndex === total - 3) {
      return setCurrentIndex(0);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === total - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(total - 3);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
  };

  return (
    <div className='relative w-full overflow-hidden'>
      {showInfo && (
        <div className='fixed inset-0 bg-light-gray opacity-50 z-10'></div>
      )}

      <div className={`relative w-full overflow-hidden flex justify-center inset-0 ${showInfo ? 'opacity-30' : ''}`}>
        <div className='w-[90%] max-w-[1440px] relative flex flex-col items-center justify-center'>
          <div className='w-[100%] p-10'>
            <div className='mt-24 w-[30rem] px-5 py-16 bg-brand '>
              <h1 className='text-[4.5rem] mt-[18rem] text-white font-normal'>Executive Committee</h1>
            </div>
          </div>
          <div className='w-[100%] p-10 pb-20'>
            <div className="relative flex justify-center">
              <div className="w-[90%] flex justify-center gap-5 overflow-hidden">
                {data.slice(currentIndex, currentIndex + 3).map((item) => (
                  <div className="w-1/3 relative group">
                    <img src={item.img} alt={item.title} />
                    <div className='absolute bottom-20 left-4'>
                      <h1 className="text-white text-[2rem] font-normal">{item.title}</h1>
                      <h1 className="text-white text-[1.5rem]">{item.position}</h1>
                    </div>
                    <div className='absolute bottom-4 left-4 cursor-pointer' onClick={() => alert(`LinkedIn Profile: ${item.title}`)}>
                      <IoLogoLinkedin className='text-white text-4xl' />
                    </div>
                    <button
                      className="absolute bottom-0 right-1 opacity-0 p-4 px-10 text-brand text-2xl bg-white underline transition-all duration-300 ease-in-out group-hover:opacity-100"
                      onClick={() => setShowInfo(true)}
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 border rounded-full z-20"
              >
                <GrPrevious />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 border rounded-full z-20"
              >
                <GrNext />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className={`absolute p-4 border border-brand right-0 bottom-0 bg-white max-w-[30rem] flex flex-col gap-5 z-20 transition-all duration-300 ease-in-out ${showInfo ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-[2rem] text-brand font-normal'>Prof. Amol Goje</h1>
            <h2 className='text-brand'>President</h2>
          </div>
          <RxCross2 className='text-2xl cursor-pointer' onClick={() => setShowInfo(false)} />
        </div>
        <div className="flex">
          <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
          <ul className='flex flex-col gap-4'>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptatem deleniti dignissimos animi quod. Deleniti cumque, eaque dicta architecto dolorem qui, totam illo velit esse ipsam, asperiores necessitatibus! Modi, voluptates!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aperiam eius illum rerum corporis ex voluptatibus a deleniti at enim. Neque eius quasi aut praesentium at laudantium eligendi sunt veritatis!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aperiam eius illum rerum corporis ex voluptatibus a deleniti at enim. Neque eius quasi aut praesentium at laudantium eligendi sunt veritatis!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aperiam eius illum rerum corporis ex voluptatibus a deleniti at enim. Neque eius quasi aut praesentium at laudantium eligendi sunt veritatis!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores aperiam eius illum rerum corporis ex voluptatibus a deleniti at enim. Neque eius quasi aut praesentium at laudantium eligendi sunt veritatis!</li>  
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Executive;
