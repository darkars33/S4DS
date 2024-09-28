import React, { useState, useEffect } from "react";
import logo from "../../../assets/Charter/Icon.svg";
import CharterComp from "../../../components/CharterComp";
import { GoTriangleRight } from "react-icons/go";

const Charter = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <div className="p-24 bg-brand w-screen"></div>
      <div className="w-[90%] max-w-[1440px] py-24 px-5">
        <h1 className="text-[4.5rem] font-normal leading-tight">
          Charter of <br /> S4DS
        </h1>
      </div>
      <div className="w-screen p-5 bg-brand"></div>

      <div className="w-[90%] max-w-[1440px] py-24 px-5 flex justify-center flex-col gap-2">
        <div className="w-[100%] grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 gap-2 relative">
          <CharterComp
            logo={logo}
            background="bg-brand"
            gap="gap-10"
            title="KEY PARTNERS"
            textColor="text-white"
            onClick={() => alert("hello")}
          />

          <div
            className={`absolute w-[33rem] p-3 bg-background border-[2px] border-brand z-50 flex flex-col transition-opacity duration-500 ease-in-out ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ top: "0%", left: 0 }}
          >
            <div className="p-3">
              <div className="float-right">
                <img src={logo} alt="logo" className="w-[5rem]" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[1.5rem] font-normal text-brand">
                KEY PARTNERS
              </h1>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  <span className="font-normal">Specific:</span> Universities,
                  colleges, and research centers.
                </p>
              </div>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  <span className="font-normal">Industry Partners: </span>{" "}
                  Technology companies, data science firms, and startups.
                </p>
              </div>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  <span className="font-normal">Government Bodies:</span>{" "}
                  National and state government agencies.
                </p>
              </div>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  <span className="font-normal">NGOs:</span> Organizations
                  focused on social issues and community development.
                </p>
              </div>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  <span className="font-normal">
                    Professional Associations:{" "}
                  </span>{" "}
                  Data science and IT professional bodies.
                </p>
              </div>
              <div className="flex">
                <GoTriangleRight className="text-brand flex-shrink-0 mt-1" />
                <p className="text-justify">
                  <span className="font-normal">Event Organizers:</span>{" "}
                  Companies specializing in conferences, seminars, and
                  workshops.
                </p>
              </div>
            </div>
          </div>

          {/* Other Charter Components */}
          <div className="grid gap-2">
            <CharterComp
              logo={logo}
              background="bg-background"
              gap="gap-20"
              title="RESOURCES"
              textColor="text-brand"
            />
            <CharterComp
              logo={logo}
              background="bg-accent-color2"
              gap="gap-20"
              title="KEY ACTIVITIES"
              textColor="text-white"
            />
          </div>

          <CharterComp
            logo={logo}
            className="w-[100%]"
            background="bg-brand"
            gap="gap-10"
            title="VALUE PROPOSITIONS"
            textColor="text-white"
          />

          <div className="grid gap-2">
            <CharterComp
              logo={logo}
              background="bg-accent-color2"
              gap="gap-20"
              title="CHANNELS"
              textColor="text-white"
            />
            <CharterComp
              logo={logo}
              background="bg-background"
              gap="gap-20"
              title="CUSTOMERS RELATIONSHIPS"
              textColor="text-brand"
            />
          </div>

          <CharterComp
            logo={logo}
            background="bg-brand"
            gap="gap-10"
            title="CUSTOMER SEGMENTS"
            textColor="text-white"
          />
        </div>

        {/* Other parts */}
        <div className="w-[100%] grid grid-flow-col gap-2">
          <div className="p-3 bg-background grid gap-10">
            <div>
              <div className="float-right px-2">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="relative p-2">
              <div className="absolute bottom-0">
                <h1 className="text-[1.5rem] font-normal text-brand">
                  COST STRUCTURE
                </h1>
              </div>
            </div>
          </div>
          <div className="p-3 bg-accent-color2 grid gap-10">
            <div>
              <div className="float-right px-2">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="relative p-2">
              <div className="absolute bottom-0">
                <h1 className="text-[1.5rem] font-normal text-brand">
                  COST STRUCTURE
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charter;
