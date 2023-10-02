import './home.css'
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Lottie from 'lottie-react';
import animation from './animations/animation_ln6ex82r.json';
import animation2 from './animations/animation_ln6fqtvp.json'
import animation3 from './animations/Ka1smE37kD.json'
import animation4 from './animations/O4vIkHhfcO.json'

import Navigation from './Navigation'

// export default function Home(props) {
// 	const { detailsProp, workPageProp, hobbyPageProp, reachusPageProp } = props;
// 	return (
// 		<div className='container main_home_container'>
// 			<Navigation workPageProp={workPageProp} hobbyPageProp={hobbyPageProp} reachusPageProp={reachusPageProp} />
// 			<div className='row'>
// 				<div className='col-7 sub_left_home_container'>{detailsProp.personalDetails.description}</div>
// 				<div className='col-1' />
// 				<div className='col-4 sub_right_home_container'>Photo</div>
// 			</div>
// 		</div>
// 	)
// }
export default function Home(props) {
	useEffect(() => {

	}, []);

	const { workPageProp, hobbyPageProp, reachusPageProp } = props;
	// TODO: this needs to be fetched from the backend later on.
	const description = 'Jagdeesh is a Full-Stack developer from Kolkata, India with 2+ years of experience across multiple industries which includes Hotel and Finance domain. Ready to take the responsibility and solving the technical aspects of a product within the time frame. \n Jagdeesh has seen new things in terms of technology and evolved with the same pace and loves to work on the features which helps the product to grow it\'s feet in the market. ';

	function replaceWithBr() {
		return description.replace(/\n/g, "<br /><br />")
	}

	const scrollToSection = (ref) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className='container main_home_container'>
			<Navigation workPageProp={workPageProp} hobbyPageProp={hobbyPageProp} reachusPageProp={reachusPageProp} />
			<div className='row'>
				<div className='container col-7 sub_left_home_container'>
					<div className='container'>
						<div className='description_container text-wrap' data-aos="fade-right" data-aos-duration="2000">
							Who is Jagdeesh ?
						</div>
						<div className='description_body_container' data-aos="fade-up" data-aos-duration="2000">
							<p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
						</div>
						<div className='container'>
							<button type="button" className='btn btn-outline-light button_get_in_touch btn-lg' onClick={() => scrollToSection(props.reachusPageProp)}>
								Get in touch
							</button>
						</div>
					</div>
				</div>
				<div className='col-5 mt-5 sub_right_home_container'>
					<div className='row'>
						<Lottie animationData={animation} data-aos="zoom-out" data-aos-duration="3000" />
					</div>
					<div className='row'>
						<div className='icons_container'>
							<div className='lotty_icons'>
								<Lottie animationData={animation2} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" />
							</div>
							<div className='lotty_icons'>
								<Lottie animationData={animation3} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" />
							</div>
							<div className='lotty_icons'>
								<Lottie animationData={animation4} data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" />
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
