import React, {useEffect} from "react";

const Brahmasutras = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-full p-4 flex flex-col items-center overflow-hidden">
      <div className="w-screen flex justify-center flex-col">
        <div className="p-20 w-[100%] bg-brand"></div>
        <div className="p-10 flex justify-center">
          <div className="w-[90%] max-w-[1440px]">
            <div className="my-24">
              <h1 className="text-[4rem] font-normal leading-tight md:text-[3rem] md:text-left">
                Data Science <br />
                Brahmasutras
              </h1>
            </div>
          </div>
        </div>

        <div className="pt-24 p-10 flex justify-center  bg-background">
          <div className="w-[90%] max-w-[1440px]">
            <h1 className="text-[2.5rem] font-normal pb-3">The BRAHMASUTRAS</h1>
            <hr className="h-px bg-light-gray border-0" />

            <div className="pt-5 w-[60%] float-right flex flex-col gap-5 md:float-none md:w-[100%] ">
              The following sutras provide a philosophical and methodological
              foundation for the practice of data science (from data collection
              to the communication of actionable insights), emphasizing the
              importance of evidence, rigorous analysis, ethical responsibility,
              and continuous learning.
              <div className="flex gap-3">
                <p className="text-lg">1.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Data Collection{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Pramana Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Transform students, researchers, companies, governments, and
                  sponsors into data science pioneers, equipped to navigate and
                  shape the future.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">2.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Data Understanding{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Samprajnata Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Knowledge arises from data analysis, but understanding
                  requires context and domain expertise. Conduct exploratory
                  data analysis (EDA) to understand the data and its nuances.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">3.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Exploratory Analysis{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Pratyaksha Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Direct observation and exploratory data analysis are essential
                  to uncover hidden patterns and relationships. Use
                  visualization and EDA techniques to discover insights.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">4.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Ethical Responsibility{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Satyagraha Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Commitment to truth and ethical considerations is paramount;
                  data must be handled responsibly and with integrity. Uphold
                  ethical standards and data privacy throughout the process.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">5.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Hypothesis Testing{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Upapatti Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Hypotheses must be tested rigorously; correlation does not
                  imply causation. Design and conduct experiments to validate
                  hypotheses and findings.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">6.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Multiple Methods{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Anekantavada Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Multiple perspectives and approaches should be considered; no
                  single method captures the complete truth. Apply different
                  algorithms and methodologies to ensure robust results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-24 p-10 flex justify-center ">
          <div className="w-[90%] max-w-[1440px]">
            <div className="w-[60%] float-left flex flex-col gap-5 md:float-none md:w-[100%] ">
              <div className="flex gap-3">
                <p className="text-lg">7.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Data Inference{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Anumana Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Inference must be based on robust statistical foundations and
                  validated through empirical evidence. Employ statistical tests
                  and modeling to draw meaningful conclusions.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">8.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Model Iteration{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Nididhyasana Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Continuous iteration and reflection on models and methods lead
                  to deeper insights and refinement. Iterate on model
                  development, validation, and tuning for optimal performance.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">9.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Model Generalization{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Vyapti Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Generalization from data must be cautious, ensuring that
                  models are not overfitted and are applicable to new data.
                  Ensure models generalize well to unseen data through
                  cross-validation and testing.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">10.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Integrated Approach{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Yoga Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Harmonious integration of data engineering, statistics, and
                  domain knowledge is necessary for successful data science.
                  Combine data engineering, statistical analysis, and domain
                  expertise for comprehensive solutions.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">11.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Results Communication{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Sabda Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  Communication of findings must be clear, concise, and
                  supported by visualizations to convey insights effectively.
                  Present results using clear reports and visualizations for
                  stakeholders.
                </p>
              </div>
              <div className="flex gap-3">
                <p className="text-lg">12.</p>
                <p className="text-lg">
                  <span className="font-normal">
                    Actionable Insights{" "}
                    <span className="font-medium text-[1.2rem] text-brand">
                      (Moksha Sutra)
                    </span>{" "}
                    :
                  </span>{" "}
                  The ultimate goal of data science is to derive actionable
                  insights that drive decision-making and create value.
                  Translate findings into actionable insights that inform
                  decision-making and add value to the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brahmasutras;
