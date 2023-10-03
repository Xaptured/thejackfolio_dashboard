import './error.css';
import React from 'react';
import "aos/dist/aos.css";

export default function Error(props) {

    const { errorName } = props;

    return (
        <div>
            <div className="container">
                <div className="error_container">
                    <div className="eror_message_one" data-aos="zoom-out" data-aos-duration="1000">
                        Something went wrong with {errorName}.
                    </div>
                    <br />
                    <div className="eror_message_two" data-aos="zoom-out" data-aos-duration="1000">
                        Please try again later.
                    </div>
                </div>
            </div>
        </div>
    )
}
