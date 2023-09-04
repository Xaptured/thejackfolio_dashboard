import React from 'react'
import './home.css'
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
	return (
		<div className='container main_home_container'>
			<Navigation workPageProp={workPageProp} hobbyPageProp={hobbyPageProp} reachusPageProp={reachusPageProp} />
			<div className='row'>
				<div className='col-7 sub_left_home_container'>Description</div>
				<div className='col-1' />
				<div className='col-4 sub_right_home_container'>Photo</div>
			</div>
		</div>
	)
}
