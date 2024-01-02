import React from 'react';

const ThankYou = () => {
  return (
    <section id="thankYouPage">
      <div className="container">
        <div className="feedback-section-title mt-5">
          <p className="text-center">Thank You!</p>
          <h3 className="text-center">Your Order has been Confirmed</h3>
          <p className="text-center">
            Thank you for choosing our products. Your order has been confirmed, and we appreciate your
            business. You will receive an email with order details shortly.
          </p>
          <hr className="hr-style" style={{ borderColor: '#0d6efd', marginBottom: '50px' }} />
        </div>
        <div className="text-center">
          <p className="lead">For any inquiries, please contact our customer support.</p>
          {/* Add additional content or links as needed */}
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
