import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../footerSection/footer.css';

const Footer = () => {
    return (
        <footer className="glass-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className='footer-text'>
                            <img className='footer-logo' src='https://microters.com/wp-content/uploads/2023/10/Logo-for-white-BG-231x43.png' alt="" />
                            <p>Microters is a leading SEO service <br /> provider company. Our primary goal <br /> is to help clients’ businesses through <br /> our highest quality services that will grow, <br /> rank well on SERPs, and generate maximum ROI.</p>
                            <ul className='social-icons d-flex' style={{ listStyle: 'none' }}>
                                <li ><a href="https://www.facebook.com/microters" target="_blank"> <FaFacebookF />  </a></li>
                                <li ><a href="https://wa.me/1711844556" target="_blank"> <FaWhatsapp />  </a></li>
                                <li ><a href="https://www.linkedin.com/company/microters/" target="_blank"> <FaLinkedinIn /> </a></li>
                                <li ><a href="https://twitter.com/microterss" target="_blank"> <FaTwitter/> </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex me-5">
                        <div className='footer-text'>
                            <h5 className='mb-3'>Quick Links</h5>
                            <ul className='quick-link' style={{ listStyle: 'none' }}>
                                <li> <Link to="/services">Services</Link> </li>
                                <li> <Link to="/privacypolicyandtermsofuse">Privacy & Terms</Link> </li>
                                <li> <Link to="/aboutUs">About Us</Link> </li>
                                <li> <Link to="/contact">Contact Us</Link> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className='footer-text'>
                            <h5>Address</h5>
                            <address>
                            Khan Zaman Tower (5th Floor),<br /> Holding No - 684/617, Jhautola 3500 Comilla, Chittagong Division, Bangladesh
                            </address>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className='copyright'>Copyright Microters {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;