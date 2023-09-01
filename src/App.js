import './App.css';
import Hobby from './components/Hobby/Hobby';
import Home from './components/Home/Home';
import ReachUs from './components/ReachUs/ReachUs';
import Work from './components/Work/Work';
import { useEffect } from 'react';

function App() {
	function fetchData() {
		// need to fetch the details(personal and professional)
		// need to fetch skills
		// need to fetch youtube data
		// need to fetch instagram data
	};

	useEffect(() => {
		fetchData();
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
