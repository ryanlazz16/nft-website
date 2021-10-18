import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import info from './info.js';

function App() {
	const [info, setInfo] = useState({});

	useEffect(() => {
		const fetchInfo = async () => {
			const { data } = await axios.get('/api/info');

			setInfo(data);
		};

		fetchInfo();
	}, []);

	return (
		<>
			<Header info={info} />
			<main>
				<HomeScreen info={info} />
			</main>
			<Footer info={info} />
		</>
	);
}

export default App;
