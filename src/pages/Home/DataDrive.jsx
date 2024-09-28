import React, { useState } from "react";
import Icons1 from "../../assets/Data Drive/Icon1.svg";
import Icons2 from "../../assets/Data Drive/Icon2.svg";
import Icons3 from "../../assets/Data Drive/Icon3.svg";
import Icons4 from "../../assets/Data Drive/Icon4.svg";

const DataDrive = () => {
  const [click, setClick] = useState("Data to Discovery");
  return (
    <>
      <div className="p-10 pt-0 pb-24 flex justify-center">
        <div className="w-[90%] max-w-[1440px]">
          <h1 className="text-[2.5rem] font-normal pb-3">
            Data-Driven Science
          </h1>
          <div className="w-[100%] flex justify-between pt-3 sm:flex-col sm:items-center sm:gap-4">
            <div className="flex gap-10">
              <ul className="flex flex-col">
                <li
                  className={`flex items-center text-[1.3rem] cursor-pointer px-10 py-4 border-r-[1px]  hover:text-brand ${
                    click === "Data to Discovery"
                      ? "bg-accent-color border-brand"
                      : "border-[#DADBDE]"
                  }`}
                  onClick={() => setClick("Data to Discovery")}
                >
                  {" "}
                  <img src={Icons1} className="mr-4 text-[2rem]" /> From Data to
                  Discovery
                </li>
                <li
                  className={`flex items-center text-[1.3rem] cursor-pointer px-10 py-4 border-r-[1px]  hover:text-brand ${
                    click === "Revealing Patterns"
                      ? "bg-accent-color border-brand"
                      : "border-[#DADBDE]"
                  }`}
                  onClick={() => setClick("Revealing Patterns")}
                >
                  {" "}
                  <img src={Icons2} className="mr-4 text-[2rem]" /> Revealing
                  Patterns
                </li>
                <li
                  className={`flex items-center text-[1.3rem] cursor-pointer px-10 py-4 border-r-[1px]  hover:text-brand ${
                    click === "Core Components"
                      ? "bg-accent-color border-brand"
                      : "border-[#DADBDE]"
                  }`}
                  onClick={() => setClick("Core Components")}
                >
                  {" "}
                  <img src={Icons3} className="mr-4 text-[2rem] " /> Core
                  Components
                </li>
                <li
                  className={`flex items-center text-[1.3rem] cursor-pointer px-10 py-4 border-r-[1px]  hover:text-brand ${
                    click === "Application"
                      ? "bg-accent-color border-brand"
                      : "border-[#DADBDE]"
                  }`}
                  onClick={() => setClick("Application")}
                >
                  {" "}
                  <img src={Icons4} className="mr-4 text-[2rem]" /> Applications
                </li>
              </ul>
            </div>
            {click === "Data to Discovery" && (
              <p className="w-[60%] text-justify text-lg sm:w-[100%]">
                Data-driven science refers to a scientific approach that relies
                heavily on data analysis and computational methods to extract
                insights, make predictions, and drive scientific discovery. This
                approach contrasts with traditional hypothesis-driven science,
                where researchers first formulate hypotheses and then design
                experiments to test them.
              </p>
            )}
            {click === "Revealing Patterns" && (
              <p className="w-[60%] text-justify text-lg sm:w-[100%]">
                In data-driven science, large volumes of data are collected and
                analysed to uncover patterns, trends, and relationships that may
                not have been previously hypothesized.
              </p>
            )}
            {click === "Core Components" && (
              <p className="w-[60%] text-justify text-lg sm:w-[100%]">
                {" "}
                Key components of data-driven science include: Big Data:
                Handling and analysing large and complex datasets. Data Mining:
                Extracting useful information from large datasets. Machine
                Learning: Using algorithms to learn from data and make
                predictions. Statistical Analysis: Applying statistical methods
                to interpret data and test hypotheses. Computational Tools:
                Utilizing software and computational resources to process and
                analyse data.
              </p>
            )}
            {click === "Application" && (
              <p className="w-[60%] text-justify text-lg sm:w-[100%]">
                Data-driven science is prevalent in fields like finance,
                genomics, astronomy, climate science, and social sciences, etc.
                where vast amounts of data are generated and need to be analysed
                to drive new discoveries and understand
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDrive;
