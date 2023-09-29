import './index.css';
import './App.css';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import backendService from './services/backendService';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Hobby from './components/Hobby/Hobby';
import ReachUs from './components/ReachUs/ReachUs';


function App() {

	const workPage = useRef(null);
	const hobbyPage = useRef(null);
	const reachusPage = useRef(null);


	// eslint-disable-next-line
	const [details, setDetails] = useState(null);
	// eslint-disable-next-line
	const [skills, setSkills] = useState(null);
	// eslint-disable-next-line
	const [videos, setVideos] = useState(null);
	// eslint-disable-next-line
	const [posts, setPosts] = useState(null);
	const [isVisible, setIsVisible] = useState(false);

	const getDetails = async () => {
		const response = await backendService.getDetails();
		setDetails(response);
	}

	const getSkills = async () => {
		const response = await backendService.getSkills();
		setSkills(response);
	}

	const getYouTubeData = async () => {
		const response = await backendService.getYouTubeData();
		setVideos(response);
	}

	const getInstagramData = async () => {
		const response = await backendService.getInstagramData();
		setPosts(response);
	}

	useLayoutEffect(() => {
		return () => {
			getDetails();
			getSkills();
			getYouTubeData();
			getInstagramData();
		}
	}, []);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<>
			{/* {
				details && <Home detailsProp={details} workPageProp={workPage} hobbyPageProp={hobbyPage} reachusPageProp={reachusPage} />
			}
			{
				details && skills && <Work ref={workPage} skillsProp={skills} detailsProp={details} />
			}
			{
				skills && videos && posts && <Hobby ref={hobbyPage} skillsProp={skills} videosProp={videos} postsProp={posts} />
			} */}
			<div className={`fade-in-element ${isVisible ? 'visible' : ''}`}>
				<Home workPageProp={workPage} hobbyPageProp={hobbyPage} reachusPageProp={reachusPage} />
			</div>
			<section ref={workPage}>
				<Work />
			</section>
			<section ref={hobbyPage}>
				<Hobby />
			</section>
			<section ref={reachusPage}>
				<ReachUs />
			</section>

		</>
	);
}

export default App;
