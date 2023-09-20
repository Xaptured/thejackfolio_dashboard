import './reachus.css'
import backendService from '../../services/backendService'
import React, { useState } from 'react'

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaCopyright } from 'react-icons/fa'

export default function ReachUs() {

    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const commentObject = {
            email: email,
            comments: comment,
            replied: false,
            message: null,
        };
        const result = await backendService.getCommentsData(commentObject);
        if (result.message === 'Request Processed') {
            setEmail('');
            setComment('');
            // TODO: show banner as successfully sent comment
        }
    }


    return (
        <div className='main_reachus_container pt-5'>
            <div className='row'>
                <div className='col-6 sub_left_reachus_container'>
                    <div className='container container_login_form'>
                        <div className="wrapper">
                            <form>
                                <h1>Join me</h1>
                                <div className='mb-3 input-box'>
                                    <input type="text" placeholder="Username" required />
                                    <i className='bx bxs-user'></i>
                                </div>
                                <div className='mb-3 input-box'>
                                    <input type="password" placeholder="Password" required />
                                    <i className='bx bxs-user'></i>
                                </div>
                                <div className='remember-forgot'>
                                    <a href="/">Forgot Password</a>
                                </div>
                                <button type="button" className='btn btn-outline-light button_login'>
                                    Login
                                </button>
                                <div className="register-link">
                                    <p>Dont have an account? <a href="/">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-6 sub_right_reachus_container'>
                    <div className='container container_contact_form'>
                        <div className="wrapper">
                            <form onSubmit={handleSubmit}>
                                <h1>Contact me</h1>
                                <div className='mb-3 input-box'>
                                    <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required />
                                    <i className='bx bxs-user'></i>
                                </div>
                                <div className='mb-3 form-floating input-box'>
                                    <textarea placeholder="Write your comment" value={comment} onChange={event => setComment(event.target.value)} required></textarea>
                                    <i className='bx bxs-user'></i>
                                </div>
                                <button type="submit" className='btn btn-outline-light button_submit'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='footer_overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='footer_container_left'>
                                    <div className='container'>
                                        <FaGithub className='icon' />
                                        <span className="icon-space"></span>
                                        <FaLinkedin className='icon' />
                                        <span className="icon-space"></span>
                                        <FaInstagram className='icon' />
                                        <span className="icon-space"></span>
                                        <FaYoutube className='icon' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='copyright_container'>
                                    <FaCopyright className='copyright_icon' />
                                    <span className='copyright_content'>Copyright 2023. All rigts reserved by TheJackFolio. Created by Jack with Love.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
