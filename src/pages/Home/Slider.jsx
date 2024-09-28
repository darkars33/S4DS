import React, { useEffect } from "react";
import "./slider.css";

const Slider = () => {
  
  return (
    <>
      <div className="p-10 py-24 flex justify-center overflow-hidden bg-background">
        <div className="w-[90%] p-3 max-w-[1440px]">
          <h1 className="text-[2.5rem] font-normal pb-3 text-center sm:text-[1.7rem]">
            We Welcome everyone who is interested in
          </h1>
          <div className="w-[100%] ">
            <div className=" flex justify-center">
              <div className="logos flex flex-col gap-4">
                <div className=" flex logos-slide">
                  <li className="flex items-center text-[2.5rem] font-normal border border-[#FF471D] p-2 px-6 text-[#FF471D]">
                    Data Science
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Machine Learning
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Statistical Modeling
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Deep Learning
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Big Data Analytics{" "}
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Data Visualization{" "}
                  </li>
                </div>
                <div className=" flex logos-slide2">
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Artificial Intelligence{" "}
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Data Visualization{" "}
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Big Data Analytics{" "}
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Data Mining
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Machine Learning
                  </li>
                  <li className="flex items-center text-[2.5rem] font-normal border p-2 px-6 border-[#FF471D] text-[#FF471D]">
                    Deep Learning
                  </li>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-[1.5rem] sm:text-[1.3rem] md:text-left">
            And to turn this interest into a valuable asset for your academic
            research and data science career.
          </p>
        </div>
      </div>
    </>
  );
};

export default Slider;

{
  /*  */
}
