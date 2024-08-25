import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const Solution1About = dynamic(
  () => import("@/src/components/sliders/Solution1About"),
  {
    ssr: false,
  }
);
const Solution1MilBoxSlider = dynamic(
  () => import("@/src/components/sliders/Solution1MilBoxSlider"),
  {
    ssr: false,
  }
);
const SolutionMilReviSlider = dynamic(
  () => import("@/src/components/sliders/SolutionMilReviSlider"),
  {
    ssr: false,
  }
);
const Solution1 = () => {
  return (
    <Layouts footer={2} headerTop extarClass={"has-additional-panel"}>
      <PageBanner
        pageName={"Solution"}
        pageTitle={"Consulting and Development"}
      />

      {/* call to action */}
      <section className="mil-p-90-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/11.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                  At STS Limited, we understand the importance of reliable,
                  innovative, and tailored solutions to meet the specific needs
                  of our clients. Our services are designed to enhance security,
                  improve communication, and ensure the safety and efficiency of
                  your operations. Below is a detailed overview of the services
                  we offer:
                </h5>
              </div>
            </div>

            {/* <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-button mil-border mil-mb-30">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* call to action end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* title */}
      <section className="mil-p-60-60">
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Advanced Security Solutions
            </span>
            <h2>
              "Industry-Leading Solutions in Security, IT, and Communication{" "}
              <br /> With <span className="mil-accent">Extensive Know How</span>
            </h2>
          </div>
        </div>
      </section>
      {/* title end */}
      <Solution1About />
      {/* title */}
      <section className="mil-p-60-60">
        <div className="container">
          <div className="mil-text-center">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Consulting
            </span>
            <h2>Services and Solutions in Focus</h2>
          </div>
        </div>
      </section>
      {/* title end */}
      {/* ??? */}
      <Solution1MilBoxSlider />

      <SolutionMilReviSlider />
    </Layouts>
  );
};
export default Solution1;
