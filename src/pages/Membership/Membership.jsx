import React from "react";
import { GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div className="max-w-full p-4 flex flex-col items-center overflow-hidden">
      <div className="w-screen flex justify-center flex-col">
        <div className="p-10 flex justify-center">
          <div className="w-[90%]">
            <div className="my-24 ">
              <h1 className="text-[4rem] font-normal text-center leading-tight md:text-[3rem] ">
                Membership of
              </h1>
              <h1 className="text-[4rem] font-normal text-center leading-tight md:text-[3rem] pt-3 ">
                <span className="px-5 bg-brand font-normal text-white">
                  {" "}
                  Society for Data Science
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="pt-24 p-10 flex justify-center  bg-background">
          <div className="w-[90%] flex flex-col gap-3">
            <div className=" flex flex-row space-between gap-24">
              <div className="w-[30%]">
                <h1 className="text-[2.5rem] font-normal pb-3">Benefits</h1>

                <div>
                  The following sutras provide a philosophical and
                  methodological foundation for the practice of data science
                  (from data collection to the communication of actionable
                  insights), emphasizing the importance of evidence, rigorous
                  analysis, ethical responsibility, and continuous learning.
                </div>
              </div>
              <div className="w-[70%] flex flex-row gap-3">
                <div className="size-full flex flex-col p-5 gap-2 bg-accent-color2 text-white ">
                  <img
                    src={"../../../assets/react.svg"}
                    className=" w-10 h-10"
                  />
                  <h1 className="text-[1.4rem] font-normal">
                    Learning and Development
                  </h1>
                  <div className="flex">
                    <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                    <p className="text-justify">
                      Free access to quarterly newsletters with cutting-edge
                      updates.
                    </p>
                  </div>
                  <div className="flex">
                    <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                    <p className="text-left">
                      Free Master Classes and Webinars.
                    </p>
                  </div>
                  <div className="flex">
                    <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                    <p className="text-left">
                      Discounted rates on workshops and certification programs.
                    </p>
                  </div>
                  <div className="flex">
                    <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                    <p className="text-left">
                      Access to a global list of mentors for collaborative
                      projects and research.
                    </p>
                  </div>
                </div>
                <div className="size-full flex flex-col p-5 gap-2 bg-[#FFDAD2] ">
                  <img
                    src={"../../../assets/react.svg"}
                    className=" w-10 h-10"
                  />
                  <h1 className="text-[1.4rem] font-normal">
                    Learning and Development
                  </h1>
                  <div className="flex">
                    <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                    <p className="text-justify">
                      Free access to quarterly newsletters with cutting-edge
                      updates.
                    </p>
                  </div>
                  <div className="flex">
                    <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                    <p className="text-left">
                      Free Master Classes and Webinars.
                    </p>
                  </div>
                  <div className="flex">
                    <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                    <p className="text-left">
                      Discounted rates on workshops and certification programs.
                    </p>
                  </div>
                  <div className="flex">
                    <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                    <p className="text-left">
                      Access to a global list of mentors for collaborative
                      projects and research.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[68%] flex flex-row gap-3">
              <div className="size-full flex flex-col p-5 gap-2 border-4 border-[#FFDAD2] bg-white ">
                <img src={"../../../assets/react.svg"} className=" w-10 h-10" />
                <h1 className="text-[1.4rem] font-normal">
                  Learning and Development
                </h1>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <p className="text-justify">
                    Free access to quarterly newsletters with cutting-edge
                    updates.
                  </p>
                </div>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <p className="text-left">Free Master Classes and Webinars.</p>
                </div>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <p className="text-left">
                    Discounted rates on workshops and certification programs.
                  </p>
                </div>
                <div className="flex">
                  <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                  <p className="text-left">
                    Access to a global list of mentors for collaborative
                    projects and research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 p-10 flex justify-center">
        <div className="w-[90%]">
          <h1 className="text-[2.5rem] font-normal pb-3">
            Our Membership Plans
          </h1>
          <div className="w-[100%] flex flex-row justify-between gap-3">
            <div className="size-full flex flex-col p-5 gap-2 border-4 border-[#FFDAD2] bg-white ">
              <h1 className="text-[1.2rem] font-normal">
                Academic Professional Member
              </h1>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  Free access to quarterly newsletters with cutting-edge
                  updates.
                </p>
              </div>
              <Link
                to="/membership/registration"
                className="p-2 text-white font-normal text-center bg-brand text-[1rem] px-4 hover:bg-accent-color hover:text-text-color"
              >
                Start Today
              </Link>
            </div>
            <div className="size-full flex flex-col p-5 gap-2 border-4 border-[#FFDAD2] bg-white ">
              <img src={"../../../assets/react.svg"} className=" w-10 h-10" />
              <h1 className="text-[1.4rem] font-normal">
                Learning and Development
              </h1>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  Free access to quarterly newsletters with cutting-edge
                  updates.
                </p>
              </div>
            </div>
            <div className="size-full flex flex-col p-5 gap-2 border-4 border-[#FFDAD2] bg-white ">
              <img src={"../../../assets/react.svg"} className=" w-10 h-10" />
              <h1 className="text-[1.4rem] font-normal">
                Learning and Development
              </h1>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  Free access to quarterly newsletters with cutting-edge
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
