import './navigation.css';
import React from "react";


export default function Navigation(props) {

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top pt-4 pb-4">
                <div className="container-fluid">
                    <p className="logoName">
                        {
                            /* <img
                            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
                            alt="Logo"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top"
                            /> */
                        }
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
                            <li className="nav-item ms-3 px-3" onClick={() => scrollToSection(props.workPageProp)}>
                                Profession
                            </li>
                            <li className="nav-item ms-3 px-3" onClick={() => scrollToSection(props.hobbyPageProp)}>
                                Hobby
                            </li>
                            <li className="nav-item ms-3 px-3" onClick={() => scrollToSection(props.reachusPageProp)}>
                                Join Us
                            </li>
                            <li className="nav-item ms-3 px-3" onClick={() => scrollToSection(props.reachusPageProp)}>
                                Contact Us
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
