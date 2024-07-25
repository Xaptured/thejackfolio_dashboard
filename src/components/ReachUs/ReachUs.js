import './reachus.css'
import backendService from '../../services/backendService'
import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaCopyright } from 'react-icons/fa'
import SyncLoader from 'react-spinners/SyncLoader'
import Aos from 'aos';
import "aos/dist/aos.css";

export default function ReachUs(props) {

    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);
    const [joiningLoading, setJoiningLoading] = useState(false);
    const [joiningName, setJoiningName] = useState('');
    const [joiningEmail, setJoiningEmail] = useState('');
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [joiningDisabled, setJoiningDisabled] = useState(false);
    const [submitButtonText, setSubmitButtonText] = useState('Submit');
    const [submitJoiningButtonText, setSubmitJoiningButtonText] = useState('Join');

    const { detailsProp } = props;

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const override = {
        marginTop: "33%",
        paddingLeft: "40%",

    };

    const joiningOverride = {
        marginTop: "18%",
        paddingLeft: "40%",

    };

    const handleJoinSubmit = async (event) => {
        event.preventDefault();
        setJoiningLoading(true);
        const joiningObject = {
            name: joiningName,
            email: joiningEmail,
            description: description,
            message: null,
        };
        const result = await backendService.saveJoinersData(joiningObject);
        setJoiningLoading(false);
        if (result.message === 'Request Processed') {
            setJoiningName('');
            setJoiningEmail('');
            setDescription('');
            setJoiningDisabled(true);
            setSubmitJoiningButtonText('Email sent successfully');
            setTimeout(() => {
                setSubmitJoiningButtonText('Join');
                setJoiningDisabled(false);
            }, 3000);

        } else {
            setJoiningName('');
            setJoiningEmail('');
            setDescription('');
            setJoiningDisabled(true);
            setSubmitJoiningButtonText('Error occurred. Please try again later.');
            setTimeout(() => {
                setSubmitJoiningButtonText('Join');
                setJoiningDisabled(false);
            }, 3000);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const commentObject = {
            email: email,
            comments: comment,
            replied: false,
            message: null,
        };
        const result = await backendService.saveCommentsData(commentObject);
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
    }


    return (
        <div className='main_reachus_container pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 sub_left_reachus_container'>
                        <div className='container container_login_form' data-aos="fade-right">
                            <div className="wrapper">
                                <form onSubmit={handleJoinSubmit}>
                                    <h1>Join my team</h1>
                                    <div className='mb-3 input-box'>
                                        <input type="text" placeholder="Name" value={joiningName} onChange={event => setJoiningName(event.target.value)} required />
                                        <i className='bx bxs-user'></i>
                                    </div>
                                    <div className='mb-3 input-box'>
                                        <input type="email" placeholder="Email" value={joiningEmail} onChange={event => setJoiningEmail(event.target.value)} required />
                                        <i className='bx bxs-user'></i>
                                    </div>
                                    <div className='mb-3 input-box'>
                                        <input type="text" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)} required />
                                        <i className='bx bxs-user'></i>
                                    </div>
                                    {
                                        joiningLoading ?
                                            <div>
                                                <div className=''>
                                                    <SyncLoader
                                                        color={"#ffffff"}
                                                        loading={joiningLoading}
                                                        cssOverride={joiningOverride}
                                                        size={15}
                                                    />
                                                </div>
                                            </div>
                                            :
                                            <button type="submit" className='btn btn-outline-light button_join' disabled={joiningDisabled}>
                                                {
                                                    submitJoiningButtonText
                                                }
                                            </button>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 sub_right_reachus_container'>
                        <div className='container container_contact_form' data-aos="fade-left">
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
                                    {
                                        detailsProp ?
                                            <div className='container'>
                                                <a href={detailsProp.personalDetails.link.githubLink} target="_blank" rel="noreferrer">
                                                    <FaGithub className='icon' />
                                                </a>
                                                <span className="icon-space"></span>
                                                <a href={detailsProp.personalDetails.link.linkedinLink} target="_blank" rel="noreferrer">
                                                    <FaLinkedin className='icon' />
                                                </a>
                                                <span className="icon-space"></span>
                                                <a href={detailsProp.personalDetails.link.instagramLink} target="_blank" rel="noreferrer">
                                                    <FaInstagram className='icon' />
                                                </a>
                                                <span className="icon-space"></span>
                                                <a href={detailsProp.personalDetails.link.youtubeLink} target="_blank" rel="noreferrer">
                                                    <FaYoutube className='icon' />
                                                </a>
                                            </div>
                                            :
                                            <div className='container'>
                                                <a href="https://github.com/Xaptured" target="_blank" rel="noreferrer">
                                                    <FaGithub className='icon' />
                                                </a>
                                                <span className="icon-space"></span>
                                                <a href="https://github.com/Xaptured" target="_blank" rel="noreferrer">
                                                    <FaLinkedin className='icon' />
                                                </a>
                                                <span className="icon-space"></span>
                                                <a href="https://www.instagram.com/xaptured__007/" target="_blank" rel="noreferrer">
                                                    <FaInstagram className='icon' />
                                                </a>
                                                <span className="icon-space"></span>
                                                <a href="https://www.youtube.com/channel/UCDKMpLyKzruI-q_aXS5l_Uw" target="_blank" rel="noreferrer">
                                                    <FaYoutube className='icon' />
                                                </a>
                                            </div>
                                    }

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
