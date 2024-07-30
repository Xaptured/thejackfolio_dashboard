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

	const [details, setDetails] = useState(null);
	const [videos, setVideos] = useState(null);
	const [posts, setPosts] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const [loadingDetails, setLoadingDetails] = useState(true);
	const [loadingVideos, setLoadingVideos] = useState(true);
	const [loadingPosts, setLoadingPosts] = useState(true);

	const getDetails = async () => {
		const response = await backendService.getDetails();
		setDetails(response);
		setLoadingDetails(false);
	}

	const getYouTubeData = async () => {
		const response = await backendService.getYouTubeData();
		setVideos(response);
		setLoadingVideos(false);
	}

	const getInstagramData = async () => {
		const response = await backendService.getInstagramData();
		setPosts(response);
		setLoadingPosts(false);
	}

	useLayoutEffect(() => {
		return () => {
			getDetails();
			getYouTubeData();
			getInstagramData();
		}
	}, []);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<>
			<div className={`fade-in-element ${isVisible ? 'visible' : ''}`}>
				<Home workPageProp={workPage} hobbyPageProp={hobbyPage} reachusPageProp={reachusPage} />
				<section ref={workPage}>
					<Work detailsProp={details} loadingDetailsProp={loadingDetails} />
				</section>
				<section ref={hobbyPage}>
					<Hobby videosProp={videos} postsProp={posts} loadingVideosProp={loadingVideos} loadingPostsProp={loadingPosts} />
				</section>
				<section ref={reachusPage}>
					<ReachUs />
				</section>
			</div>
		</>
	);
}

export default App;
