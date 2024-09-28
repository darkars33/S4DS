import React, {useEffect} from "react";
import Background from "./Background";
import DataDrive from "./DataDrive";
import WhoWeAre from "./WhoWeAre";
import Slider from "./Slider";
import TimeLine from "./TimeLine";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-full p-4 flex flex-col items-center overflow-hidden">
      <div className="w-screen h-[3.5rem] bg-black"></div>
      <div className="p-10 w-screen bg-accent-color2 flex justify-center">
        <div className="w-[90%] max-w-[1440px] my-40 md:my-20 flex justify-between items-end flex-wrap md:gap-10 md:justify-center">
          <div className="w-[35rem] md:w-[100%]">
            <h1 className="text-white text-[5.5rem] font-normal leading-tight md:text-[3rem] md:text-left">
              Society for Data Science
            </h1>
          </div>
          <div className="w-[18rem] mb-0 md:w-[50%] sm:w-[100%]">
            <p className="text-white text-2xl">
              {" "}
              <span className="text-brand">
                Empowering India's future data scientists
              </span>{" "}
              through learning and innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen flex flex-col justify-center">
        <Background />
        <DataDrive />
        <WhoWeAre />
        <Slider />
        <TimeLine />
      </div>
    </div>
  );
};

export default Home;
