import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import info from './info.js';

function App() {
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
