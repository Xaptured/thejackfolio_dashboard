import './navigation.css';
import React, { useEffect } from "react";
import "aos/dist/aos.css";

export default function Navigation(props) {

    useEffect(() => {
    }, []);

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top pt-4 pb-4">
                <div className="container-fluid">
                    <p className="logoName" data-aos="fade-down" data-aos-duration="1000">
                        TheJack-Folio
                    </p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 navigation_elements">
                            <li className="nav-item ms-3 px-3" onClick={() => scrollToSection(props.workPageProp)} data-aos="fade-down" data-aos-duration="700">
                                Profession
                            </li>
                            <li className="nav-item ms-3 px-3" onClick={() => scrollToSection(props.hobbyPageProp)} data-aos="fade-down" data-aos-duration="900">
                                Hobby
                            </li>
                            <li className="nav-item ms-3 px-3" onClick={() => scrollToSection(props.reachusPageProp)} data-aos="fade-down" data-aos-duration="1100">
                                Join Me
                            </li>
                            <li className="nav-item ms-3 px-3" onClick={() => scrollToSection(props.reachusPageProp)} data-aos="fade-down" data-aos-duration="1300">
                                Contact Me
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
