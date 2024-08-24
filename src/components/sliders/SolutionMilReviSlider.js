import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const SolutionMilReviSlider = () => {
  return (
    <section className="mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: "30%" }} />
      <div className="container">
        <div className="row align-items-end mil-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Solutions of Consulting
            </span>
            <h2>
              <span className="mil-accent">Why Choose STS for Your CCTV Security Needs?</span>
            </h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-revi-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-revi-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milReviSlider}
          className="swiper-container mil-revi-slider mil-mb-90"
        >
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/12.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Real-Time Alerts and Notifications</h5>
              <p>
                The CCTV systems from STS are designed to send real-time alerts
                directly to your smartphone or other devices. This feature
                ensures that you are instantly informed of any suspicious
                activity, allowing for a rapid response to potential threats.
                The system can also be integrated with other security measures,
                such as alarms and police notifications.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/13.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Expert Support and Maintenance</h5>
              <p>
                Choosing STS means having access to a team of experienced
                professionals who offer ongoing support, maintenance, and
                upgrades. This ensures that your CCTV system remains operational
                at all times, with any technical issues resolved promptly. The
                reliable support also includes regular updates to keep your
                security system at the forefront of technological advancements.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/14.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Scalability and Customization</h5>
              <p>
                STS offers scalable solutions that can be customized to fit the
                unique needs of your business or home. Whether you require a
                single camera setup or a comprehensive network of surveillance
                systems across multiple locations, STS can provide a tailored
                solution that grows with your security requirements.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="mil-mb-30">Comprehensive Customer Care</h5>
              <p>
                STS combines advanced CCTV technology with excellent customer
                care. From choosing the right system to installation and ongoing
                support, STS ensures you’re fully supported at every stage,
                providing peace of mind and reliable security.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <a href="#." className="mil-link">
          <span>Let’s Solve Your Challenges With AI</span>
          <i className="fas fa-arrow-right" />
        </a>
      </div>
    </section>
  );
};
export default SolutionMilReviSlider;
