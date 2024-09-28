import React, { useState, useEffect } from 'react';
import ObjectiveData from './Data';
import { GoTriangleRight } from 'react-icons/go';
import Polygon from '../../../assets/Objectives/Polygon.png';

const Objectives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < ObjectiveData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className='relative flex flex-col items-center justify-center w-full overflow-hidden'>
        <div className='relative p-10 w-screen h-[30rem]' style={{ backgroundImage: `url(${Polygon})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
          <h1 className='mt-[10%] text-[4.5rem] font-normal text-center'>Objectives of <br /> S4DS</h1>
        </div>
      </div>
      <div className='p-5 flex justify-center pb-24'>
        <div className='w-[90%] max-w-[1440px] p-2 flex-col items-center'>
          <div className="carousel carousel-center max-h-[32rem] bg-white rounded-box w-[100%] space-x-4 p-4 flex justify-around transition-all duration-150 ease-in-out">
            {ObjectiveData.slice(currentIndex, currentIndex + 3).map((data) => (
              <div id={data.id} key={data.id} className="carousel-item flex flex-col p-2 gap-2 w-[20rem] border-2 border-brand rounded-lg">
                <img src={data.logo} className="rounded-box w-10 h-10" />
                <h1 className="text-[1.4rem] font-normal">{data.title}</h1>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <p className="text-justify">
                    <span className="font-normal">Specific:</span> {data.Specific}
                  </p>
                </div>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <p className="text-justify">
                    <span className="font-normal">Measurable:</span> {data.Measurable}
                  </p>
                </div>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <p className="text-justify">
                    <span className="font-normal">Achievable:</span> {data.Achievable}
                  </p>
                </div>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-justify">
                      <span className="font-normal">Relevant:</span> {data.Relevant}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-justify">
                      <span className="font-normal">Time-bound:</span> {data.timeBound}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 p-5">
            {/* Previous Button */}
            <div className='flex p-3 bg-background gap-10 w-[30rem] justify-around'>
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-700 text-lg font-normal rounded-full focus:outline-none"
              disabled={currentIndex === 0} // Disable when at the start
            >
              ←
            </button>

            {/* Carousel images */}
            <div className="flex space-x-10 items-center">
              {ObjectiveData.slice(currentIndex, currentIndex + 3).map((image, index) => (
                <div
                  key={index}
                  className=" p-2 bg-gray-800  flex items-center justify-center text-lg rounded-full w-8 h-8"
                >
                  {index + currentIndex+1} {/* Adjust for accurate index display */}
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-2 bg-gray-700 text-lg font-normal rounded-full focus:outline-none"
              disabled={currentIndex >= ObjectiveData.length - 3} // Disable when at the end
            >
              →
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objectives;
