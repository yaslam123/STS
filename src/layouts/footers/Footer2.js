const Footer2 = () => {
  return (
    <footer className="mil-dark-bg">
      <img src="img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content">
          <div className="row align-items-center mil-p-120-60">
            <div className="col-xl-6 mil-mb-60">
              <h3 className="mil-light mil-mb-15">
                Join The <span className="mil-accent">STS</span> Experience
              </h3>
              <p className="mil-light-soft">Subscribe To Our News Latter</p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <form className="mil-subscribe-form">
                <input type="email" placeholder="Your email address" />
                <button
                  type="submit"
                  className="mil-button-deccent mil-deccent-bg"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
          <div className="mil-divider mil-light" />
          <div className="row justify-content-between mil-p-120-60">
            <div className="col-md-3 col-lg-3 col-xl-3 mil-mb-30">
              <img
                src="img/logo/01.png"
                alt="logo"
                className="mil-logo mil-mb-60"
                style={{ width: 300 }}
              />
              <p
                className="mil-light mil-light-soft"
                style={{ marginBottom: 45 }}
              >
                4th Floor Daru tawhid Plaza Maka Al Mukarama Road, <br />
                Mogadishu, Somalia.
              </p>
              <ul className="mil-simple-list mil-mb-15">
                <li className="mil-light">
                  <span className="mil-accent">+252</span>&nbsp;
                  <span className="mil-light-soft">6 137 52 222</span>
                </li>
                <li>
                  <span className="mil-accent">info</span>
                  <span className="mil-light mil-light-soft">
                    @globalsts.net
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-7">
              <div className="row justify-content-end">
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Social</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="https://www.facebook.com/globalstsone">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/globalsts.one">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.co.uk/globalstsone">
                        Pinterest
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/globalstsone">Twitter</a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@globalstsone">Tiktok</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">
                    Support
                  </h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="#.">Documentation</a>
                    </li>
                    <li>
                      <a href="/contact">Support</a>
                    </li>
                    <li>
                      <a href="/contact">FAQs</a>
                    </li>

                    <li>
                      <a href="#.">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Links</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/service-1">Service</a>
                    </li>
                    <li>
                      <a href="/solution-1">Solution</a>
                    </li>

                    <li>
                      <a href="#.">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#.">Terms &amp; Condition</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">
            © System Technology Services 2024.
          </p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
