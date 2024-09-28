import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-full p-4 flex flex-col items-center overflow-hidden">
      <div className="w-screen flex justify-center flex-col">
        <div className="p-10 flex justify-center">
          <div className="w-[90%] max-w-[1440px]">
            <div className="my-24">
              <h1 className="text-[4rem] font-normal leading-tight md:text-[4rem] md:text-center">
                Our Vision <br /> and Mission
              </h1>
            </div>
          </div>
        </div>
        <div className="p-20 w-[100%] bg-brand"></div>
        <div className="py-24 p-10 flex justify-center bg-background">
          <div className="w-[90%] max-w-[1440px]">
            <h1 className="text-[2.5rem] font-normal pb-3">Vision</h1>
            <hr className="h-px bg-light-gray border-0" />
            <div className="pt-5 w-[100%] sm:w-[100%] sm:flex-col sm:items-center sm:gap-4">
              <p className="w-[60%] text-lg md:w-[100%] float-right md:float-none">
                To revolutionize the world through data science by fostering an
                environment of continuous knowledge sharing and innovation,
                ultimately improving lives, driving business excellence, and
                enabling government efficiency. Our aim is to cultivate a new
                generation of data science leaders capable of solving the
                world&#39;s most pressing challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="py-24 p-10 flex justify-center md:mb-20">
          <div className="w-[90%] max-w-[1440px]">
            <h1 className="text-[2.5rem] font-normal pb-3">Mission</h1>
            <hr className="h-px w-[25%] bg-light-gray border-0" />

            <div className="pt-5 w-[60%] float-right flex flex-col gap-5 md:float-none md:w-[100%] ">
              <div className="flex gap-3">
                <p className="text-lg" data-aos="fade-right">
                  1.
                </p>
                <div data-aos="fade-left">
                  <p className="text-lg">
                    <span className="font-normal">
                      Empowerment through Knowledge:
                    </span>{" "}
                    Transform students, researchers, companies, governments, and
                    sponsors into data science pioneers, equipped to navigate
                    and shape the future.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <p className="text-lg" data-aos="fade-right">
                  2.
                </p>
                <p className="text-lg" data-aos="fade-left">
                  <span className="font-normal">Leadership in Innovation:</span>{" "}
                  Forge a dynamic network of experts who will lead the
                  transformation of all sectors through cutting-edge data
                  science applications.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg" data-aos="fade-right">
                  3.
                </p>
                <p className="text-lg" data-aos="fade-left">
                  <span className="font-normal">
                    Excellence in Problem Solving:
                  </span>{" "}
                  Elevate academic and professional capabilities to tackle
                  complex, real-world problems using advanced data analytics and
                  large- scale datasets.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg" data-aos="fade-right">
                  4.
                </p>
                <p className="text-lg" data-aos="fade-left">
                  <span className="font-normal">
                    Integrated Multidisciplinary Approach:
                  </span>{" "}
                  Adopt a holistic approach that integrates domain-specific
                  insights to unlock the true potential and boundaries of data
                  science.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg" data-aos="fade-right">
                  5.
                </p>
                <p className="text-lg" data-aos="fade-left">
                  <span className="font-normal">Ethical Stewardship:</span>{" "}
                  Advocate for the responsible and ethical use of data, ensuring
                  it serves the greater good and benefits society as a whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;

// {/*  */}
