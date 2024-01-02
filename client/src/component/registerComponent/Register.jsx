import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../registerComponent/register.css"

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({});

    const collectData = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerData);
        // You can add your registration logic here
    }

    return (
        <section className="register-section">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <input onBlur={collectData} className='form-control p-3' type="text" name="name" placeholder='Enter Your Name' required />
                <input onBlur={collectData} className='form-control p-3 my-3' type="email" name="email" placeholder='Enter Your Email' required />
                <input onBlur={collectData} className='form-control p-3 my-3' type="password" name="password" placeholder='Enter Your Password' required />
                <input onBlur={collectData} className='form-control p-3 my-3' type="tel" name="mobile" placeholder='Enter Your Mobile Number' required />
                <input className='btn my-3 w-100 p-3' type="submit" value="Register" />
            </form>
            <p className="mt-2">Already have an account? <span> <Link to="/login">Login Now</Link></span></p>
        </section>
    );
};

export default RegisterForm;