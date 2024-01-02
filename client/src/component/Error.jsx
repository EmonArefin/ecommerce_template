import React from 'react';

const Error = () => {
  return (
    <section id="error404Page">
      <div className="container mb-5">
        <div className="feedback-section-title mt-5">
          <p className="text-center">404 Error</p>
          <h3 className="text-center">Page Not Found</h3>
          <p className="text-center">
            We're sorry, but the page you are looking for might be in another dimension. Please check
            the URL or go back to the homepage.
          </p>
          <hr className="hr-style" style={{ borderColor: '#0d6efd', marginBottom: '50px' }} />
        </div>
        <div className="text-center">
          <p className="lead">
            If you believe this is a mistake or need assistance, please contact our support team.
          </p>
          {/* Add additional content or links as needed */}
        </div>
      </div>
    </section>
  );
};

export default Error;
