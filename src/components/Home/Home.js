import './home.css'
import React from 'react';

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
						<div className='description_container text-wrap'>
							Who is Jagdeesh ?
						</div>
						<div className='description_body_container'>
							<p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
						</div>
						<div className='container'>
							<button type="button" className='btn btn-outline-light button_get_in_touch btn-lg' onClick={() => scrollToSection(props.reachusPageProp)}>
								Get in touch
							</button>
						</div>
					</div>
				</div>
				<div className='col-1' />
				<div className='col-4 sub_right_home_container'></div>
			</div>
		</div>
	)
}
