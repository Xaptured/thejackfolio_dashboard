import './work.css'
import React from 'react'
import coins from './Hotels.png'
import coins2 from './coin2.png'

import { FaReact, FaVuejs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'
import { LiaJava } from 'react-icons/lia';
import { GrMysql } from 'react-icons/gr';
import { TbBrandJavascript } from 'react-icons/tb'
import { DiBootstrap } from 'react-icons/di'

// export default function Work(props) {
//     const { detailsProp, skillsProp } = props;

//     return (
//         <div className='container main_work_container pt-5'>
//             <div className='row'>
//                 <div className='col-7 sub_left_work_container'>{detailsProp.professionalDetails[0].organization.name}</div>
//                 <div className='col-5 sub_right_work_container'>
//                     <div className='row sub_right_work_skill_container'>
//                         {skillsProp.skills.PROFESSIONAL.map(skill => <h6>{skill}</h6>)}
//                     </div>
//                     <div className='row'>
//                         <div className='col-6'>See More</div>
//                         <div className='col-6'>Download CV</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function Work() {

    return (
        <div className='container main_work_container pt-5'>
            <div className='row'>
                <div className='col-7 sub_left_work_container'>
                    <h1>Organizations</h1>
                    <div id="carouselExampleIndicators" className="carousel slide carousel_work_container">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2000">
                                <div className="card">
                                    <div className='container header_card'>
                                        <p className='header_org_name'>Principal</p>
                                        <p className='header_date'>2023 - Present</p>
                                        <p className='header_designaton'>Software Engineer</p>
                                    </div>
                                    <div className='container image_card_wrapper'>
                                        <div className='image_card'>
                                            <img src={coins2} alt="finance" />
                                        </div>
                                    </div>
                                    <div className='container footer_card'>
                                        <p className='footer_project'>Simple Invest</p>
                                        <p className='footer_desc'>enhancing features of the product and maintainance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <div className="card">
                                    <div className='container header_card'>
                                        <p className='header_org_name'>Cognizant</p>
                                        <p className='header_date'>2020 - 2022</p>
                                        <p className='header_designaton'>Jr.Software Engineer</p>
                                    </div>
                                    <div className='container image_card_wrapper'>
                                        <div className='image_card'>
                                            <img src={coins} alt="hotel" />
                                        </div>
                                    </div>
                                    <div className='container footer_card'>
                                        <p className='footer_project'>LightSpeed</p>
                                        <p className='footer_desc'>enhancing features of the product and maintainance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-5 sub_right_work_container'>
                    <div className='row'>
                        <h1>Skills</h1>
                        <div className='col-4'>
                            <div className='container icon_container'>
                                <LiaJava className='icon_skill' />
                                <p>JAVA</p>
                            </div>
                        </div>
                        <div className='col-4 mt-4 '>
                            <div className='container icon_container_mid_one'>
                                <SiSpringboot className='icon_skill' />
                                <p className='text-wrap'>SPRING BOOT</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='container icon_container'>
                                <GrMysql className='icon_skill' />
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 mt-4'>
                            <div className='container icon_container'>
                                <FaHtml5 className='icon_skill' />
                                <p>HTML 5</p>
                            </div>
                        </div>
                        <div className='col-4 mt-5'>
                            <div className='container icon_container_mid_two'>
                                <DiBootstrap className='icon_skill' />
                                <p>BOOTSTRAP</p>
                            </div>
                        </div>
                        <div className='col-4 mt-4'>
                            <div className='container icon_container'>
                                <FaCss3Alt className='icon_skill' />
                                <p>CSS 3</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 mt-4'>
                            <div className='container icon_container'>
                                <TbBrandJavascript className='icon_skill' />
                                <p>JAVA SCRIPT</p>
                            </div>
                        </div>
                        <div className='col-4 mt-5'>
                            <div className='container icon_container_mid_two'>
                                <FaReact className='icon_skill' />
                                <p>REACT</p>
                            </div>
                        </div>
                        <div className='col-4 mt-4'>
                            <div className='container icon_container'>
                                <FaVuejs className='icon_skill' />
                                <p>VUE</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <button type="button" className="btn btn-outline-light button_download_cv btn-lg">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
