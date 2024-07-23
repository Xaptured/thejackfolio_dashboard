import './hobby.css'
import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import HashLoader from 'react-spinners/HashLoader';
import Error from '../Error/Error';
import { SiAdobeaftereffects, SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom } from 'react-icons/si'

export default function Hobby(props) {

    useEffect(() => {
    }, []);

    const { videosProp, postsProp, loadingVideosProp, loadingPostsProp } = props;

    const override = {
        paddingLeft: "100%",
        paddingTop: "40%",
    };

    const renderThumbnails = () => {
        const thumbnails = [];
        const { youTubeResponse } = videosProp;
        let isFirstThumbnail = true;

        youTubeResponse.items.forEach((item, index) => {
            if (isFirstThumbnail) {
                thumbnails.push(
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={item.snippet.thumbnails.medium.url} className="d-block w-100" alt="..." />
                    </div>
                )
                isFirstThumbnail = false;
            } else {
                thumbnails.push(
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={item.snippet.thumbnails.medium.url} className="d-block w-100" alt="..." />
                    </div>
                )
            }
        });

        return thumbnails;
    }

    const renderPosts = () => {
        const posts = [];
        const { response } = postsProp;
        let isFirstPost = true;

        response.data.forEach((post, index) => {
            if (post.media_type === 'IMAGE') {
                if (isFirstPost) {
                    posts.push(
                        <div className="carousel-item rotate-image active" data-bs-interval="3000">
                            <img src={post.media_url} className="d-block w-100" alt="..." />
                        </div>
                    )
                    isFirstPost = false
                } else {
                    posts.push(
                        <div className="carousel-item rotate-image" data-bs-interval="3000">
                            <img src={post.media_url} className="d-block w-100" alt="..." />
                        </div>
                    )
                }
            }
        });

        return posts;
    }
    return (
        <div className=' main_hobby_container pt-3'>
            {
                !postsProp && !videosProp ?
                    <div className=''>
                        <HashLoader
                            color={"#ffffff"}
                            loading={loadingPostsProp && loadingVideosProp}
                            cssOverride={override}
                            size={150}
                        />
                    </div>
                    :
                    postsProp?.message === 'Request Processed' && videosProp?.messsage === 'Request Processed' ?
                        <div className='container' data-aos="fade-up" data-aos-duration="1000">
                            <div className='row'>
                                <div className='col-2 mt-5'>
                                    <div className='row' data-aos-duration="200" data-aos="fade-right">
                                        <div className='col-12 mt-5'>
                                            <div className='container icon_hobby_container'>
                                                <SiAdobeaftereffects className='icon_hobby_skill' />
                                                <p>After Effects</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row' data-aos-duration="400" data-aos="fade-right">
                                        <div className='col-12 mt-3'>
                                            <div className='container icon_hobby_container'>
                                                <SiAdobephotoshop className='icon_hobby_skill' />
                                                <p>Photoshop</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row' data-aos-duration="600" data-aos="fade-right">
                                        <div className='col-12 mt-3'>
                                            <div className='container icon_hobby_container'>
                                                <SiAdobepremierepro className='icon_hobby_skill' />
                                                <p>Premier Pro</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row' data-aos-duration="800" data-aos="fade-right">
                                        <div className='col-12 mt-3'>
                                            <div className='container icon_hobby_container_last'>
                                                <SiAdobelightroom className='icon_hobby_skill' />
                                                <p>Lightroom</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4 sub_left_hobby_container'>
                                    <div className='row'>
                                        <div className='instagram_heading'>
                                            Instagram
                                        </div>
                                        <div className='container carousel_container'>
                                            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                                <div className="carousel-inner">
                                                    {
                                                        renderPosts()
                                                    }
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
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
                                                        {
                                                            renderThumbnails()
                                                        }
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnlyTwo" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnlyTwo" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row pt-5'>
                                        <div className='col-6'>
                                            <a href="https://www.instagram.com/xaptured__007/" target="_blank" rel="noreferrer">
                                                <button type="button" className="btn btn-outline-light btn-lg button_hobby">Instagram</button>
                                            </a>
                                        </div>
                                        <div className='col-6'>
                                            <a href="https://www.youtube.com/channel/UCDKMpLyKzruI-q_aXS5l_Uw" target="_blank" rel="noreferrer">
                                                <button type="button" className="btn btn-outline-light btn-lg button_hobby">YouTube</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        :
                        <Error errorName={'hobby'} />
            }

        </div>
    )
}
