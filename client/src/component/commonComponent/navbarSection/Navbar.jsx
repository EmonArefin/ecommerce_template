import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../navbarSection/navbar.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarScroll() {
  const navigate = useNavigate()
  const navLinkStyle = { marginRight: '10px' };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <div className='container'>
        <img src="https://microters.com/wp-content/uploads/2023/10/Logo-for-white-BG-231x43.png" height={25} alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav-control ms-auto my-5 my-lg-0 mx-2" style={{ maxHeight: '100px' }} navbarScroll>
          <Button variant="" className="nav-but me-4" size="sm">
            <NavDropdown title="All Pages" className=''>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">Home</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/product">Products</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/contact">Contact</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/cart">Cart</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/checkout">Checkout</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/thanks">Thank You</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/error404">404 Error</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/faq">Frequently Asked Question (FAQ)</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/reviewsorcases">Reviews or Cases</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/searchresult">Search Results</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/privacypolicyandtermsofuse">Privacy Policy & Terms of Use</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/blog">Blog</NavLink></NavDropdown.Item>
                    <NavDropdown.Item><NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/accountregistration">Registration</NavLink></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            </Button>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">Home</NavLink>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/product">Products</NavLink>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/blog">Blog</NavLink>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/contact">Contact</NavLink>
            
            
          </Nav>
          
            <Button onClick={()=> navigate('/login')} variant="" className="nav-but me-4">Login</Button>
            <Button onClick={()=> navigate('/accountregistration')} variant="" className='nav-but'>Register</Button>
          
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarScroll;