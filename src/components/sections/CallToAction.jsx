import Link from "next/link";
import Content from "../../data/sections/call-to-action.json";

const CallToActionSection = () => {
  return (
    <section className="mil-p-120-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-xl-6">
            <h4 className="mil-mb-60">
              Ready to elevate your business with cutting-edge technology
              solutions?
              <span className="mil-accent">
                {" "}
                Connect with our experts today
              </span>
            </h4>
          </div>
          <div className="col-lg-12 col-xl-6">
            <div className="mil-adaptive-right">
              <a
                href="/contact"
                className="mil-button mil-border mil-mr-15 mil-mb-30"
              >
                <span>Contact Us Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
