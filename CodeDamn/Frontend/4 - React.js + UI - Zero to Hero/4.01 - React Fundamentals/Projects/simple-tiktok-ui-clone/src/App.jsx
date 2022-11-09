import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

const API_URL = 'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json';

export default function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		// TODO: Get the data from API_URL above
		// Store it inside videos state variable
		setVideos(() => {
			return fetch(API_URL);
		});

		console.log(videos);
	}, []);

	return (
		<div className='app'>
			<div className='container'>
				{console.log(videos)}
				{/* TODO: Loop over the API_URL data and render Video component */}
				{/* TODO: Make sure to assign the correct URL for each video */}
				<Video url='https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v1.mp4' />
			</div>
		</div>
	);
}
