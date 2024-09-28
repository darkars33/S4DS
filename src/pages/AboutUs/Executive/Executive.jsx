import React, { useState } from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Amol from '../../../assets/Executive/Amol-Goje.svg';
import Neha from '../../../assets/Executive/Neha-Sharma.svg';
import Amlan from '../../../assets/Executive/Amlan-Chakrabarti.svg';
import { GoTriangleRight } from 'react-icons/go';
import { RxCross2 } from "react-icons/rx";

const Executive = () => {

  const images = [
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ];

  const data = [
    {
      id: 1,
      title: "Amol Goje",
      img: Amol,
      linkedIn: ""
    },
    {
      id: 2,
      title: "Neha",
      img: Neha,
      linkedIn: ""
    },
    {
      id: 3,
      title: "Amlan",
      img: Amlan,
      linkedIn: ""
    },
    {
      id: 4,
      title: "Amol Goje",
      img: Amol,
      linkedIn: ""
    },
    {
      id: 5, // Fix duplicate id
      title: "Amol Goje",
      img: Amol,
      linkedIn: ""
    },
    {
      id: 6,
      title: "Neha",
      img: Neha,
      linkedIn: ""
    },
    {
      id: 7,
      title: "Amlan",
      img: Amlan,
      linkedIn: ""
    },
    {
      id: 8,
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
    <div className='w-full overflow-hidden flex justify-center'>
      <div className='w-[90%] max-w-[1440px] relative flex flex-col items-center justify-center'>
        <div className='w-[100%] p-10'>
          <div className='mt-24 w-[30rem] px-5 py-16 bg-brand '>
            <h1 className='text-[4.5rem] mt-[18rem] text-white font-normal'>Executive Committee</h1>
          </div>
        </div>
        <div className='w-[100%] p-10 pb-20'>
          <div className=" ">
            <div className="relative flex justify-center">
              <div className="w-[90%] flex justify-center gap-5 overflow-hidden">
                {/* Display three images at a time */}
                {data.slice(currentIndex, currentIndex + 3).map((item) => (
                  <div
                    className="w-[34%] relative group"
                  >
                    <img src={item.img} alt="" />
                    <button
                      className="absolute bottom-0 right-1 opacity-0 p-4 px-10 text-brand text-2xl bg-white underline transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:bottom-0 group-hover:right-1"
                      onClick={() => setShowInfo(true)}
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </div>

              {/* Next and Previous buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 border rounded-full"
              >
                <GrPrevious />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800  p-3 border rounded-full"
              >
                <GrNext />
              </button>
            </div>
          </div>
        </div>
        <div className={`p-4 absolute border border-brand right-0 bottom-0 bg-white max-w-[30rem] flex flex-col gap-5 transition-all duration-300 ease-in-out ${showInfo ? 'translate-x-0' : 'translate-x-[200rem]'}`}>
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
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam eius illum rerum corporis ex voluptatibus a deleniti at enim. Neque eius quasi aut praesentium at laudantium eligendi sunt veritatis!</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam eius illum rerum corporis ex voluptatibus a deleniti at enim. Neque eius quasi aut praesentium at laudantium eligendi sunt veritatis!</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam eius illum rerum corporis ex voluptatibus a deleniti at enim. Neque eius quasi aut praesentium at laudantium eligendi sunt veritatis!</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam eius illum rerum corporis ex voluptatibus a deleniti at enim. Neque eius quasi aut praesentium at laudantium eligendi sunt veritatis!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Executive 
