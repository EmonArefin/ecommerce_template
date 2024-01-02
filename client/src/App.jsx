import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import FrequentlyAskedQuestionsPage from './pages/FrequentlyAskedQuestionsPage';
import ReviewsOrCasesPage from './pages/ReviewsOrCasesPage';
import SearchResultsPage from './pages/SearchResultsPage';
import PrivacyPolicyAndTermsOfUsePage from './pages/PrivacyPolicyAndTermsOfUsePage';
import AccountRegistrationPage from './pages/AccountRegistrationPage';
import BlogPage from './pages/BlogPage';
import NavbarScroll from './component/commonComponent/navbarSection/Navbar';
import ContactPage from './pages/ContactPage';
import Footer from './component/commonComponent/footerSection/Footer';
import PageTitle from './component/commonComponent/pageTitleSection/PageTitle';
import LoginForm from './component/loginComponent/Login';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <NavbarScroll/>
          <PageTitle/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/product' element={<ProductsPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path='/thanks' element={<ThankYouPage/>}/>
            <Route path='/error404' element={<ErrorPage/>}/>
            <Route path='/faq' element={<FrequentlyAskedQuestionsPage/>}/>
            <Route path='/reviewsorcases' element={<ReviewsOrCasesPage/>}/>
            <Route path='/searchresult' element={<SearchResultsPage/>}/>
            <Route path='/privacypolicyandtermsofuse' element={<PrivacyPolicyAndTermsOfUsePage/>}/>
            <Route path='/accountregistration' element={<AccountRegistrationPage/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
