import React from 'react';
import "../contactComponent/contact.css"

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="contact-section-title my-5">
        <p className="text-center">CONTACT</p>
        <h3 className="text-center">I’M Here To Help You</h3>
        <p className="text-center">I have decades of experience in providing SEO strategies and consultations. And so far have helped numerous small, medium, and even enterprise-level businesses and individuals to step up their online game further. And I can help you too with <i className="fa-solid fa-fade" style={{ color: '#0d6efd' }}>:</i></p>
        <hr className="hr-style" style={{ borderColor: '#0d6efd', margin: 'auto' }} />
      </div>

      <div className="row text-center contact-card">
        <div className="col-lg-5">
          <div className="about-specialty-card">
            <p>GET IN TOUCH!</p>
            <i className="fa-solid fa-address-card fa-flip fa-3x icon-style" style={{ color: '#0d6efd' }}></i>
            <h3 className="font-weight-bolder mb-3">Want To Discuss Anything With Me? Call Me Or Send Me A Mail!</h3>
            <p className="small mb-1"> <i className="fa-solid fa-envelope" style={{ color: '#0d6efd' }}></i> contact.emonarefin@gmail.com</p>
            <p className="small mb-1"> <i className="fa-solid fa-phone" style={{ color: '#0d6efd' }}></i> +88 01400 264525</p>
            <p className="small mb-1"> <i className="fa-solid fa-location-dot" style={{ color: '#0d6efd' }}></i> Baropara, Sadar South, Cumilla 3500, Bangladesh</p>
            <p className="mt-3">FIND WITH ME</p>

            {/* social button start */}
            <div className="social-links">
              {/* ... (social buttons) */}
            </div>
            {/* social button end */}

          </div>
        </div>

        <div className="col-lg-7">
          <form className="form was-validated" action="mailto:contact.emonarefin@gmail.com" method="post" encType="text/plain">
            <div className="name align-self-center">
              <label className="mb-2 mb-lg-0">
                <input required="" placeholder="" type="text" className="input" />
                <span>FIRST NAME</span>
              </label>

              <label>
                <input required="" placeholder="" type="text" className="input" />
                <span>LAST NAME</span>
              </label>
            </div>

            <label>
              <input required="" placeholder="" type="email" className="input" />
              <span>E-Mail</span>
            </label>

            <label>
              <input required="" type="tel" placeholder="" className="input" />
              <span>PHONE NUMBER</span>
            </label>
            <label>
              <textarea required="" rows="3" placeholder="" className="input01" style={{ resize: 'none' }}></textarea>
              <span>YOUR MESSAGE...</span>
            </label>

            <div className="form-marketing">
              <input id="oktomail" type="checkbox" />
              <label htmlFor="oktomail" className="checkbox">
                I want to join the newsletter
              </label>
            </div>

            <button className="form-submit-button align-self-center">
              SUBMIT
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
