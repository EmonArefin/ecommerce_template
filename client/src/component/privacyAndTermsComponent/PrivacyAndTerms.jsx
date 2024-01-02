import React from 'react';
import "../privacyAndTermsComponent/privacyAndTerms.css"

const PrivacyAndTerms = () => {
  return (
    <section id="privacy-and-terms">
      <div className="privacy-and-terms-section-title my-5">
        <p className="text-center">PRIVACY AND TERMS</p>
        <h3 className="text-center">Your Privacy Matters</h3>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, elit at volutpat hendrerit, nisl ipsum pellentesque magna, a eleifend ipsum elit vel est.</p>
        <hr className="hr-style" style={{ borderColor: '#0d6efd', margin: 'auto' }} />
      </div>

      <div className="privacy-content">
        <h4>Privacy Policy</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, elit at volutpat hendrerit, nisl ipsum pellentesque magna, a eleifend ipsum elit vel est.</p>
        {/* Add more privacy policy content as needed */}

        <h4>Terms of Use</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, elit at volutpat hendrerit, nisl ipsum pellentesque magna, a eleifend ipsum elit vel est.</p>
        {/* Add more terms of use content as needed */}
      </div>
    </section>
  );
};

export default PrivacyAndTerms;
