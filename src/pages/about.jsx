import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import AboutVideo from "../components/sections/AboutVideo";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import Divider from "../components/sections/Divider";
import CallToActionSection from "../components/sections/CallToAction";
const About = () => {
  return (
    <Layouts footer={2} headerTop extarClass={"has-additional-panel"}>
      <PageBanner pageName={"About us"} pageTitle={"Enterprise"} />
      <Divider />

      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div
          className="mil-deco2 mil-deco-deccent"
          style={{ top: 0, left: "35%" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/faces/s5.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Company Overview
              </span>
              <h2 className="mil-mb-50">
                We Specialize in <br />
                <span className="mil-deccent">Transforming Your Ideas</span> or
                Business in The Current
                <br /> Digital Era.
              </h2>
              <p className="mil-mb-50">
                At STS, we specialize in turning your ideas into reality by
                leveraging cutting-edge technology. In today’s fast-evolving
                digital landscape, our mission is to guide your business through
                a successful transformation, ensuring you stay competitive and
                innovative. Whether you are looking to enhance your IT
                infrastructure, implement advanced security systems, or explore
                new digital opportunities, STS is your trusted partner in the
                journey to success.{" "}
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Custom Solutions</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Expert Team</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Innovation-Driven</span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">Sustainable Growth</span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5">
                  <Link href="team-single" className="mil-post-sm mil-mb-60">
                    <div className="mil-cover-frame">
                      <img src="img/faces/1.jpg" alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h4 className="mil-font-3 mil-accent">Ahmed Ali</h4>
                      <p className="mil-text-sm">CEO &amp; Founder</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}

      {/* call to action */}
      <CallToActionSection />
      {/* <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                Lorem ipsum dolor sit amet,{" "}
                <span className="mil-accent">consectetur adipiscing elit</span>,
                sed do eiusmod tempor incididunt ut labor aliqua.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="mil-adaptive-right">
                <a
                  href="#."
                  className="mil-button mil-border mil-mr-15 mil-mb-30"
                >
                  <span>Talk To an Expert</span>
                </a>
                <a href="#." className="mil-button-with-label mil-mb-60">
                  <div className="mil-button mil-border mil-icon-button">
                    <span>
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <span className="mil-dark">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* call to action end */}

      {/* Call to action */}
      <AboutVideo />
      {/* Call to action */}

      {/* counters */}
      <section className="mil-p-120-60">
        <div
          className="mil-deco2 mil-deco-deccent"
          style={{ top: 0, left: "25%" }}
        />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="mil-h1">
                8<span className="mil-accent">+</span>
              </div>
              <h6 className="mil-mb-60">Years Experience</h6>
              <h2 className="mil-mb-60">
                STS is your trusted partner for innovative and
                <span className="mil-deccent"> growth-focused</span> IT services
                and solutions
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                Accelerate <span className="mil-accent">Innovation</span> with
                world class tech teams We’ll match you to an entire{" "}
                <span className="mil-accent">Remote Technology</span>
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-deccent">16+</span>&nbsp; Software
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-deccent">3+</span>&nbsp; Years Client
                    Engagement
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-deccent">360+</span>&nbsp; App
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-deccent">520+</span>&nbsp; Web
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* partners */}
      <div className="mil-partners mil-p-120-90">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="img/partners/1.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/3.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/4.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/5.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/6.png" alt="partner" />
            </a>
          </div>
        </div>
      </div>
      {/* partners end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div
          className="mil-deco2 mil-deco-deccent"
          style={{ top: 0, right: "15%" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/faces/t2.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                STS Company
              </span>
              <h2 className="mil-mb-50">Our Mission</h2>
              <p className="mil-mb-50">
                At STS, our mission is to empower businesses with innovative
                technology solutions that drive growth and ensure security. We
                strive to be your trusted partner in navigating the digital
                landscape.
              </p>
              <ul className="mil-simple-list">
                <li>Enhancing Services.</li>
                <li>Accelerate innovation.</li>
                <li>World-Class Tech Teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* features */}
      <section className="mil-p-120-120">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover Our Company
          </span>
          <h2 className="mil-mb-120">Why Work With Us</h2>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Top Expertise</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Industry-leading professionals dedicated to your success.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Quality Management</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Industry-leading professionals dedicated to your success.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Utmost Flexibility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Adapting to your specific business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Agility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Quick, efficient responses to challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Innovation</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Constantly evolving to keep you ahead.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
        </div>
      </section>
      {/* features end */}
      {/* features */}
      <section className="mil-deep-bg mil-p-120-60">
        <div
          className="mil-deco2 mil-deco-deccent"
          style={{ top: 0, right: "25%" }}
        />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            For STS Company
          </span>
          <h2 className="mil-mb-120">
            We Live by <span className="mil-accent">Powerful</span> Values
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Are</h4>
                  <p className="mil-box-text">
                    Dedicated to providing exceptional service and innovative
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Deep Dive</h4>
                  <p className="mil-box-text">
                    Thorough in our approach, ensuring we meet all your business
                    needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Take</h4>
                  <p className="mil-box-text">
                    Accountable for delivering results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Value</h4>
                  <p className="mil-box-text">
                    Building trust through honest and transparent communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Believe</h4>
                  <p className="mil-box-text">
                    Continuously pushing the boundaries to stay ahead.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Say “We”</h4>
                  <p className="mil-box-text">
                    Working closely with clients to achieve shared goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features end */}
      {/* contact */}
      {/* contact */}
    </Layouts>
  );
};
export default About;
