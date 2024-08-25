import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Contact = () => {
  return (
    <Layouts footer={2} headerTop extarClass={"has-additional-panel"}>
      <PageBanner
        pageName={"Contact Us"}
        pageTitle={"Let’s discuss your opportunity"}
      />
      {/* contact */}
      <section className="mil-contact mil-p-60-60">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <form>
                <h4 className="mil-mb-60">
                  <span className="mil-deccent">01.</span> Tell Us About
                  Yourself
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>First Name</span>
                      </label>
                      <input type="text" placeholder="John" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Last Name</span>
                      </label>
                      <input type="text" placeholder="Jones" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Address</span>
                      </label>
                      <input type="email" placeholder="doe@mydomain.com" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Phone</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Company</span>
                      </label>
                      <input type="text" placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Role</span>
                      </label>
                      <input type="text" placeholder="Your role" />
                    </div>
                  </div>
                </div>
                <h4 className="mil-mb-60">
                  <span className="mil-deccent">02.</span> What Can We Help You
                  With?
                </h4>
                <div className="row">
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark"></label>
                      <input type="text" placeholder="Your Message" />
                    </div>
                  </div>
                </div>
                <h4 className="mil-mb-60">
                  <span className="mil-deccent">03.</span> Tell Us About Your
                  Project
                </h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Project Description</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="mil-shortened"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-attach-frame mil-dark mil-mb-30">
                      <i className="fas fa-paperclip" />
                      <label className="mil-custom-file-input">
                        <span>Attach your file</span>
                        <input type="file" id="mil-file-input" />
                      </label>
                      <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Project Budget</span>
                      </label>
                      <input type="number" placeholder={123} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="mil-button mil-border mil-fw">
                      <span>Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Support Request</h5>
                <p className="mil-mb-20">
                  Our experts are ready to answer your questions.
                </p>
                <Link href="contact" className="mil-link mil-link-sm">
                  <span>Support Now</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/8.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/9.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Needs More Info?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="mil-divider mil-mb-60" />
              <Link href="contact" className="mil-link mil-link-sm mil-mb-15">
                <span>Legality Guide</span>
                <i className="fas fa-arrow-right" />
              </Link>
              <br />
              <Link href="contact" className="mil-link mil-link-sm">
                <span>Security Center</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
      {/* map */}
      <div>
        <div className="mil-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3987.3103275034955!2d45.3130758!3d2.031641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d584147fef4aec9%3A0x5e3ee4b2f8953111!2sSTS%20LIMITEDD!5e0!3m2!1sen!2sso!4v1724234861594!5m2!1sen!2sso"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="container" />
      </div>
      {/* map end */}
      {/* contact info */}
      <section className="mil-p-90-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">United States</h4>
                <h5 className="mil-list-title mil-mb-15">New York</h5>
                <p className="mil-mb-30">
                  525, North Tryon Street, Suite 1600, Charlotte, NC 28202-0213
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="mil-accent">usa</span>.support@mydomain.com
                </h6>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">Germany</h4>
                <h5 className="mil-list-title mil-mb-15">Berlin</h5>
                <p className="mil-mb-30">
                  501, Satyamev Eminence, Science City Road, Ahmedabad, Gujarat
                  - 380060
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="mil-accent">germany</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">France</h4>
                <h5 className="mil-list-title mil-mb-15">Paris</h5>
                <p className="mil-mb-30">
                  397 Bedford Highway, Suite 323 Halifax NS B3M 2L3 Science City
                  Road
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="mil-accent">france</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-faqs mil-p-0-120">
        <div
          className="mil-deco"
          style={{ bottom: 0, left: "10%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="mil-tabs">
            <input
              type="radio"
              name="tabs"
              id="tab1"
              defaultChecked="checked"
            />
            <label htmlFor="tab1">Information</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">ITSulu Connects</span> The
                    Entire Organization From End To End.
                  </h3>
                  <p className="mil-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem. Investigationes demonstraverunt
                    lectores legere me lius quod ii legunt saepius.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>Information about ITSulu</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>What are the benefits of using ITSulu?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How much does ITSulu cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab2" />
            <label htmlFor="tab2">Pricing Plans</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">Lorem ipsum</span> dolor sit
                    amet, consectetur adipisicing elit.
                  </h3>
                  <p className="mil-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem. Investigationes demonstraverunt
                    lectores legere me lius quod ii legunt saepius.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>How much does ITSulu cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>What are the benefits of using ITSulu?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Information about ITSulu</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Lorem Ipsum, you need to be sure there</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab3" />
            <label htmlFor="tab3">Data and Privacy</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">Lorem Ipsum</span> available,
                    but the majority have suffered
                  </h3>
                  <p className="mil-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>What are the benefits of using ITSulu?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How much does ITSulu cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Information about ITSulu</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab4" />
            <label htmlFor="tab4">Security</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">Aliquam aut natus</span>{" "}
                    perspiciatis corporis sunt alias cumques.
                  </h3>
                  <p className="mil-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>Information about ITSulu</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>What are the benefits of using ITSulu?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How much does ITSulu cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
