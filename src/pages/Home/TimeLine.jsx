import React from "react";
import { Link } from "react-router-dom";

const TimeLine = () => {
  return (
    <div className="p-10 py-24  flex justify-center">
      <div className=" w-[90%] max-w-[1440px] flex justify-center flex-col items-center gap-10">
        <h1 className="text-[2.5rem] font-normal">We are committed to</h1>
        <ul className="timeline timeline-vertical">
          <li>
            <hr />
            <div className="timeline-start text-2xl text-brand">
              <h1 className="mr-10">Serve Our Members</h1>
            </div>
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-brand rounded-full"></div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-brand rounded-full"></div>
            </div>
            <div className="timeline-end text-2xl text-brand">
              <h1 className="ml-10">
                Improve the Data <br /> Science Profession
              </h1>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start text-2xl text-brand">
              <h1 className="mr-10">
                Eliminate bias and <br />
                Enhance diversity
              </h1>
            </div>
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-brand rounded-full"></div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-brand rounded-full"></div>
            </div>
            <div className="timeline-end  text-2xl text-brand">
              <h1 className="ml-10">
                {" "}
                Advance Ethical Data <br /> Science Globally
              </h1>
            </div>
            <hr />
          </li>
        </ul>
        <Link
          to="/membership"
          className="p-2 text-white bg-brand text-xl px-4 hover:bg-accent-color hover:text-text-color"
        >
          Get Involved
        </Link>
      </div>
    </div>
  );
};

export default TimeLine;
