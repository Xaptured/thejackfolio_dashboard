import React from 'react'
import './home.css'
import Navigation from './Navigation'

export default function Home() {
	return (
		<div className='container main_home_container'>
			<Navigation />
			<div className='row'>
				<div className='col-7 sub_left_home_container'>About Me</div>
				<div className='col-1' />
				<div className='col-4 sub_right_home_container'>Photo</div>
			</div>
		</div>
	)
}
