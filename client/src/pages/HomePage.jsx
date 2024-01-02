import React from 'react';
import ContactSection from '../component/contactComponent/Contact';
import ProductList from '../component/productComponent/Products';
import Review from '../component/reviewComponent/Review';
import FaqPage from './../component/faqComponent/FAQ';

const HomePage = () => {
    return (
        <div>
            <ProductList/>
            <Review/>
            <FaqPage/>
            <ContactSection/>
        </div>
    );
};

export default HomePage;