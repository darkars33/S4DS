import React from "react";

const Background = () => {
  return (
    <>
      <div className=" pt-24 p-10 flex justify-center">
        <div className="w-[90%] max-w-[1440px]">
          <h1 className="text-[2.5rem] font-normal pb-3">Background</h1>
          <hr className="text-background pb-3" />
          <div className="w-[100%] flex justify-between sm:w-[100%] sm:flex-col sm:items-center sm:gap-4">
            <p className="w-[20%] text-[1.3rem] font-normal sm:w-[100%]">
              Unifying Tomorrow, the Future of Data Science with Exponential
              Technologies
            </p>
            <p className="w-[60%] text-lg text-justify sm:w-[100%]">
              With the exponential growth of digital data, there’s a critical
              demand for skilled professionals who can extract actionable
              insights and drive innovation. Despite of vast potential, there’s
              a shortage of expertise in data science globally. The intent to
              form the Society of Data Science (S4DS) to bridge this gap by
              creating a collaborative platform that promotes knowledge sharing,
              professional development, and ethical practices, ensuring India
              can lead globally in the age of big data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
