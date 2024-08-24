import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const clickedTabsSliderButton = (event) => {
  const buttons = document.querySelectorAll(".mil-tab-buttons a");
  buttons.forEach((button) => {
    button.classList.remove("mil-active");
  });

  event.currentTarget.classList.toggle("mil-active");
};

const Solution1About = () => {
  return (
    <section className="mil-deep-bg mil-p-120-0">
      <div className="container">
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/2.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Security Services</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      <h4>1</h4>At STS, our CCTV systems are designed to provide
                      high-definition surveillance with advanced remote
                      monitoring capabilities and intelligent analytics,
                      ensuring that your property is always secure. We
                      complement this with sophisticated access control systems,
                      offering solutions like biometric readers and smart card
                      systems that effectively restrict unauthorized entry and
                      protect your premises.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      <h4>2:</h4> Additionally, our alarm systems are engineered
                      to deliver real-time alerts, which can be seamlessly
                      integrated with local authorities for an immediate
                      response to potential threats. Leveraging the latest in
                      AI-driven monitoring technologies, including facial
                      recognition and motion detection, our surveillance
                      solutions ensure comprehensive coverage and enhanced
                      security for your operations.
                    </p>
                  </div>
                </div>
                {/* <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a> */}
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/2.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/1.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>IT Solutions</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      <h4>1</h4>IT Infrastructure: "We design and implement
                      scalable IT systems tailored to your business needs,
                      ensuring a solid technology foundation for success." Cloud
                      Solutions: "Our secure and flexible cloud services support
                      data storage, application hosting, and disaster recovery,
                      providing your business with agility."
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      <h4>2</h4>Cybersecurity: "Protect your data with our
                      comprehensive cybersecurity services, including threat
                      detection, incident response, and encryption." Managed IT
                      Services: "Let us handle your IT needs with 24/7
                      monitoring, support, and proactive maintenance to maximize
                      productivity and minimize downtime."
                    </p>
                  </div>
                </div>
                {/* <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a> */}
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/3.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab3">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/11.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Communication Systems</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                      <h4>1</h4>BPX Phone Systems: "Our business phone systems
                      come with features like call routing, voicemail, and
                      conferencing, ensuring seamless communication for your
                      team." VoIP Solutions: "Switch to a modern communication
                      system with our VoIP services, offering crystal-clear
                      calls, video conferencing, and mobile connectivity
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      <h4>2</h4>Network Cabling: "We provide structured cabling
                      solutions that serve as the backbone for your IT and
                      communication systems, ensuring reliable data
                      transmission." Smart Parking Locks and Access Control:
                      "Integrate smart parking solutions with efficient access
                      control to manage vehicle access securely and seamlessly.
                    </p>
                  </div>
                </div>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/1.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab4">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <div className="mil-mr-15">
                    <div className="mil-icon-frame mil-icon-frame-md">
                      <img src="img/icons/md/3.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Fire Protection</h5>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                    <h4>1</h4>Fire Alarm Systems: "We install and maintain fire alarm
                      systems that ensure early detection and warning,
                      protecting lives and property." Emergency Lighting: "Our
                      emergency lighting solutions guarantee that your premises
                      are safely illuminated during power outages, guiding
                      occupants to safety
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                    <h4>2</h4>Fire Suppression Systems: "We offer fire suppression
                      solutions like sprinklers, gas suppression, and foam-based
                      systems to efficiently control and extinguish fires." Fire
                      Safety Audits: "Our experts conduct thorough fire safety
                      audits to identify risks and ensure your fire protection
                      measures are up to date and effective.
                    </p>
                  </div>
                </div>
                {/* <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a> */}
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/4.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="mil-tab-buttons mil-mt-60-adapt">
          <a
            href="#tab1"
            className="mil-active"
            onClick={clickedTabsSliderButton}
          >
            <span>Security Services</span>
          </a>
          <a href="#tab2" onClick={clickedTabsSliderButton}>
            <span>IT Solutions</span>
          </a>
          <a href="#tab3" onClick={clickedTabsSliderButton}>
            <span>Communication Systems</span>
          </a>
          <a href="#tab4" onClick={clickedTabsSliderButton}>
            <span>Fire Protection</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Solution1About;
