import React, { useState } from "react";
import { MdOutlineInfo } from "react-icons/md";

const WhoWeAre = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="p-10 py-24 flex justify-center bg-background">
        <div className="w-[90%] max-w-[1440px]">
          <h1 className="text-[2.5rem] font-normal pb-3">Who We Are</h1>
          <hr className="bg-slate-200 h-[2px]" />
          <div className="pt-10 text-right md:text-center">
            <p className="text-[2rem] text-brand font-devanagari font-semibold relative pr-10 md:hidden">
              दत्तविज्ञानयन्त्राध्ययनकृत्रिमबुद्धीनां भविष्यत्{" "}
              <MdOutlineInfo
                className="absolute md:hidden top-0 right-0 text-text-color cursor-pointer"
                onMouseMove={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              />{" "}
              <br /> एकीकरणं श्वः प्राप्यते श्वस्त्राणस्य सुयोग्यतमम्।
            </p>
            <p className="hidden md:block md:text-[1.5rem] text-[2rem] text-[#FF471D] font-semibold pr-10">
              दत्तविज्ञानयन्त्राध्ययनकृत्रिमबुद्धीनां भविष्यत एकीकरणं श्वः
              प्राप्यते श्वस्त्राणस्य सुयोग्यतमम्।
            </p>
            <p className="text-justify text-lg hidden md:block p-2 bg-white mt-5">
              {" "}
              <span className="bg-[#FF471D] text-white p-1">
                दत्तविज्ञानयन्त्राध्ययनकृत्रिमबुद्धीनां
              </span>
              (dattavijñānayantrādhyayanakṛtrimabuddhīnām): of data <br />{" "}
              science, machine learning, and AI;{" "}
              <span className="bg-[#FF471D] text-white p-1">भविष्यत्</span>{" "}
              (bhaviṣyat): the future;{" "}
              <span className="bg-[#FF471D] text-white p-1">एकीकरणं</span>
              (ekīkaraṇaṁ): unifying; <br />{" "}
              <span className="bg-[#FF471D] text-white p-1">श्वः</span> (śvaḥ):
              tomorrow;{" "}
              <span className="bg-[#FF471D] text-white p-1">प्राप्यते</span>
              (prāpyate): is achieved;{" "}
              <span className="bg-[#FF471D] text-white p-1">
                श्वस्त्राणस्य
              </span>{" "}
              (śvastrāṇasya): of tomorrow; <br />{" "}
              <span className="bg-[#FF471D] text-white p-1">सुयोग्यतमम्</span>
              (suyogyatamam): the most suitable or optimal
            </p>
          </div>
          <div>
            {show && (
              <div className="float-end md:hidden pt-5 transition-all duration-300 ease-in-out">
                <p className="text-justify text-lg p-3 bg-white">
                  {" "}
                  <span className="bg-[#FF471D] text-white p-1">
                    दत्तविज्ञानयन्त्राध्ययनकृत्रिमबुद्धीनां
                  </span>
                  (dattavijñānayantrādhyayanakṛtrimabuddhīnām): of data <br />{" "}
                  science, machine learning, and AI;{" "}
                  <span className="bg-[#FF471D] text-white p-1">भविष्यत्</span>{" "}
                  (bhaviṣyat): the future;{" "}
                  <span className="bg-[#FF471D] text-white p-1">एकीकरणं</span>
                  (ekīkaraṇaṁ): unifying; <br />{" "}
                  <span className="bg-[#FF471D] text-white p-1">श्वः</span>{" "}
                  (śvaḥ): tomorrow;{" "}
                  <span className="bg-[#FF471D] text-white p-1">प्राप्यते</span>
                  (prāpyate): is achieved;{" "}
                  <span className="bg-[#FF471D] text-white p-1">
                    श्वस्त्राणस्य
                  </span>{" "}
                  (śvastrāṇasya): of tomorrow; <br />{" "}
                  <span className="bg-[#FF471D] text-white p-1">
                    सुयोग्यतमम्
                  </span>
                  (suyogyatamam): the most suitable or optimal
                </p>
              </div>
            )}
          </div>

          <div className="pt-10 mt-36 md:mt-0">
            <p className="text-justify text-lg">
              <span className="text-black font-semibold">Explanation:</span> The
              future integration of data science, machine learning, and
              artificial intelligence holds many opportunities. As we look
              forward to tomorrow, this combination will become increasingly
              important. By utilizing the latest technologies, we can create
              more efficient, accurate, and faster data science tools and
              systems. This is the most suitable way to achieve our goals.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 py-24  flex justify-center">
        <div className="w-[90%] max-w-[1440px]">
          <div className="py-3 w-[40rem] md:w-[100%] flex flex-col gap-5">
            <h1 className="text-[1.3rem] text-[#4E4E5C] font-semibold">
              We are a non-profit professional association aiming to create a
              collaborative platform.
            </h1>
            <p className="text-lg">
              Since our inception, we have been dedicated to bringing together
              technical experts from Industry, Academia, Government Labs, and
              Professional Bodies to promote innovation in Data Science.
            </p>
          </div>
          <div className="float-right mt-10 md:mt-10 md:float-none">
            <div className="w-[34rem] md:w-[100%] flex flex-col gap-5">
              <h1 className="text-[1.3rem] text-[#4E4E5C] font-semibold">
                Our Unique Initiative
              </h1>
              <p className="text-lg">
                We are recognized as a{" "}
                <span className="text-brand">“one of its kind”</span> initiative
                rallying the technical community around an{" "}
                <span className="text-[2rem] text-brand font-semibold">
                  INDIA FIRST
                </span>{" "}
                agenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
