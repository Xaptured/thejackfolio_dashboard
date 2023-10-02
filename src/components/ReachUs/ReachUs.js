import './reachus.css'
import backendService from '../../services/backendService'
import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaCopyright } from 'react-icons/fa'
import SyncLoader from 'react-spinners/SyncLoader'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function ReachUs() {

    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [submitButtonText, setSubmitButtonText] = useState('Submit');

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const override = {
        marginTop: "33%",
        paddingLeft: "40%",

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const commentObject = {
            email: email,
            comments: comment,
            replied: false,
            message: null,
        };
        const result = await backendService.getCommentsData(commentObject);
        setLoading(false);
        if (result.message === 'Request Processed') {
            setEmail('');
            setComment('');
            setDisabled(true);
            setSubmitButtonText('Email sent successfully');
            setTimeout(() => {
                setSubmitButtonText('Submit');
                setDisabled(false);
            }, 3000);

        } else {
            setEmail('');
            setComment('');
            setDisabled(true);
            setSubmitButtonText('Error occurred. Please try again later.');
            setTimeout(() => {
                setSubmitButtonText('Submit');
                setDisabled(false);
            }, 3000);
        }
        // setTimeout(() => {
        //     setLoading(false);
        //     setDisabled(true);
        //     setSubmitButtonText('Error occurred. Please try again later.');
        //     setTimeout(() => {
        //         setSubmitButtonText('Submit');
        //         setDisabled(false);
        //     }, 3000);

        // }, 5000);
    }


    return (
        <div className='main_reachus_container pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 sub_left_reachus_container'>
                        <div className='container container_login_form' data-aos="fade-up">
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
                        <div className='container container_contact_form' data-aos="fade-up">
                            <div className="wrapper">
                                <form onSubmit={handleSubmit}>
                                    <h1>Contact me</h1>
                                    <div className='mb-3 input-box'>
                                        <input type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} required />
                                        <i className='bx bxs-user'></i>
                                    </div>
                                    <div className='mb-3 input-box'>
                                        <textarea placeholder="Write your comment" value={comment} onChange={event => setComment(event.target.value)} required></textarea>
                                        <i className='bx bxs-user'></i>
                                    </div>
                                    {
                                        loading ?
                                            <div>
                                                <div className=''>
                                                    <SyncLoader
                                                        color={"#ffffff"}
                                                        loading={loading}
                                                        cssOverride={override}
                                                        size={15}
                                                    />
                                                </div>
                                            </div>
                                            :
                                            <button type="submit" className='btn btn-outline-light button_submit' disabled={disabled}>
                                                {
                                                    submitButtonText
                                                }
                                            </button>
                                    }
                                </form>
                            </div>
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
                                        {/* TODO: Add links */}
                                        <FaGithub className='icon' />
                                        <span className="icon-space"></span>
                                        <FaLinkedin className='icon' />
                                        <span className="icon-space"></span>
                                        <a href="https://www.instagram.com/xaptured__007/" target="_blank" rel="noreferrer">
                                            <FaInstagram className='icon' />
                                        </a>
                                        <span className="icon-space"></span>
                                        <a href="https://www.youtube.com/channel/UCDKMpLyKzruI-q_aXS5l_Uw" target="_blank" rel="noreferrer">
                                            <FaYoutube className='icon' />
                                        </a>
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
