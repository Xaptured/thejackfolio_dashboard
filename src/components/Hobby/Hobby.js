import './hobby.css'
import bgTwo from './bg-8.jpg'
import bgThree from './bg-9.jpg'
import React from 'react'

import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom } from 'react-icons/si'

// export default function Hobby(props) {
//     const { skillsProp } = props;
//     const { videosProp } = props;
//     const { postsProp } = props;

//     return (
//         <div className='container main_hobby_container pt-5'>
//             <div className='row'>
//                 <div className='col-7 sub_left_hobby_container'>{postsProp.response.data[0].media_type}</div>
//                 <div className='col-5 sub_right_hobby_container'>
//                     <div className='row sub_right_hobby_skill_container'>
//                         {skillsProp.skills.PROFESSIONAL.map(skill => <h6>{skill}</h6>)}
//                     </div>
//                     <div className='row'>
//                         <div className='col-4'>See More</div>
//                         <div className='col-4'>Instagram</div>
//                         <div className='col-4'>YouTube</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default function Hobby() {

    return (
        <div className=' main_hobby_container pt-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 mt-5'>
                        <div className='row'>
                            <div className='col-12 mt-5'>
                                <div className='container icon_hobby_container'>
                                    <SiAdobeaftereffects className='icon_hobby_skill' />
                                    <p>After Effects</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 mt-3'>
                                <div className='container icon_hobby_container'>
                                    <SiAdobephotoshop className='icon_hobby_skill' />
                                    <p>Photoshop</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 mt-3'>
                                <div className='container icon_hobby_container'>
                                    <SiAdobepremierepro className='icon_hobby_skill' />
                                    <p>Premier Pro</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 mt-3'>
                                <div className='container icon_hobby_container_last'>
                                    <SiAdobelightroom className='icon_hobby_skill' />
                                    <p>Lightroom</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-4 sub_left_hobby_container'>
                        {/* <div className='row'>
                            <div className='instagram_heading'>
                                Instagram
                            </div>
                            <div className='container instagram_container'>
                                <div className='container carousel_container'>
                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="2000">
                                                <img src={bgThree} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={bgTwo} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={bgThree} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className='row'>
                            <div className='instagram_heading'>
                                Instagram
                            </div>
                            <div className='container'>
                                <div className='container carousel_container'>
                                    <div id="carouselExampleSlidesOnly" className="carousel slide vertical" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="2000">
                                                <img src={bgThree} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={bgTwo} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={bgThree} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-6 sub_right_hobby_container'>
                        <div className='row'>
                            <div className='instagram_heading'>
                                YouTube
                            </div>
                            <div className='container'>
                                <div className='container youtube_container'>
                                    <div id="carouselExampleSlidesOnlyTwo" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="2000">
                                                <img src={bgThree} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={bgTwo} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src={bgThree} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row pt-5'>
                            <div className='col-6'>
                                <button type="button" className="btn btn-outline-light btn-lg button_hobby">Instagram</button>
                            </div>
                            <div className='col-6'>
                                <button type="button" className="btn btn-outline-light btn-lg button_hobby">YouTube</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
