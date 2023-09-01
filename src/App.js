import './App.css';
import Hobby from './components/Hobby/Hobby';
import Home from './components/Home/Home';
import ReachUs from './components/ReachUs/ReachUs';
import Work from './components/Work/Work';
import backendService from './services/backendService';
import { useEffect, useState } from 'react';


function App() {
	const [details, setDetails] = useState(null);
	const [skills, setSkills] = useState(null);
	const [videos, setVideos] = useState(null);
	const [posts, setPosts] = useState(null);

	const getDetails = async () => {
		const detailsResult = await backendService.getDetails();
		setDetails(detailsResult);
	}

	const getSkills = async () => {
		const skillsResult = await backendService.getSkills();
		setSkills(skillsResult);
	}

	const getYouTubeData = async () => {
		const youTubeDataResult = await backendService.getYouTubeData();
		setVideos(youTubeDataResult);
	}

	const getInstagramData = async () => {
		const instagramDataResult = await backendService.getInstagramData();
		setPosts(instagramDataResult);
	}

	useEffect(() => {
		return () => {
			getDetails();
			getSkills();
			getYouTubeData();
			getInstagramData();
		}
	}, []);

	return (
		<>
			<Home />
			<Work />
			<Hobby />
			<ReachUs />
		</>
	);
}

export default App;
