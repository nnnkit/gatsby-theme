import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src="assets/images/logo7.png" alt="" />
      <div className="padding">
        <div className="container">
          <div className="flex-between footer__wrapper">
            <div className="footer__item footer__contact flex-center">
              <div>
                <h6>Contact Us</h6>
                <a
                  href="tel:+918884446745"
                  className="flex-start footer__contact-item"
                >
                  <i className="fas fa-phone-square" />
                  <p>+918884446745</p>
                </a>
                <a
                  href="mailto:connect@airytails.com"
                  className="flex-start footer__contact-item"
                >
                  <i className="fas fa-envelope" />
                  <p>connect@airytails.com</p>
                </a>
              </div>
            </div>
            <div className="vr-line" />
            <div className="footer__item footer__subscription">
              <div className="flex-center">
                <div className="footer__item-container" id="subscribeContainer">
                  <h6>Sign up for our Newsletter maling list:</h6>
                  <div className="subscribe-box flex-start">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Your Email Address"
                      id="subscribeInput"
                    />
                    <button id="subscribeButton">subscribe</button>
                  </div>
                </div>
                <div id="subscribed" />
              </div>
            </div>
            <div className="vr-line" />
            <div className="footer__item footer__social">
              <div className="flex-center">
                <div className="footer__item-container">
                  <h6>Follow Us on Social Media:</h6>
                  <div className="flex-center">
                    <div className="flex-start footer__social-item">
                      <a
                        href="https://www.facebook.com/airytails/"
                        target="_blank"
                        className="flex-start footer__social-item1"
                      >
                        <i className="fab fa-facebook" />
                      </a>
                      <a
                        href="https://twitter.com/Airytails"
                        target="_blank"
                        className="flex-start"
                      >
                        <i className="fab fa-twitter-square" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/airytails/"
                        target="_blank"
                        className="flex-start"
                      >
                        <i className="fab fa-linkedin" />
                      </a>
                      <a
                        href="https://www.instagram.com/airytails/"
                        target="_blank"
                        className="flex-start"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
