import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const SolutionMilReviSlider = () => {
  return (
    <section className="mil-p-60-60">
      <div className="mil-deco" style={{ top: 0, right: "30%" }} />
      <div className="container">
        <div className="row align-items-end mil-mb-50">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Solutions of Consulting
            </span>
            <h2>
              Why Choose
              <span className="mil-accent"> STS </span>
              for Your CCTV Security Needs?
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
                The system can also be integrated with other security measures.
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
                Choosing STS means gaining access to a dedicated team of
                experienced professionals who provide ongoing support,
                maintenance, and system upgrades. This comprehensive service
                ensures that your CCTV system remains operational and effective
                at all times, with any technical issues swiftly resolved by our
                expert team.
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
                STS offers highly scalable solutions that are fully customizable
                to meet the unique security needs of your business or home.
                Whether you require a simple, single-camera setup or an
                extensive network of surveillance systems across multiple
                locations, <br /> STS delivers a tailored solution that evolves
                with your security requirements.
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
                we combine cutting-edge CCTV technology with exceptional
                customer care to provide a holistic security solution. From the
                consultation and selection of the right system to a installation
                and ongoing support, we're committed to supporting you at every
                stage of your security journey. Our approach ensures that you
                receive attention and reliable service.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default SolutionMilReviSlider;
