import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import info from './info.js';

function App() {
	return (
		<>
			<Header info={info} />
			<main>
				<HomeScreen info={info} />
			</main>
		</>
	);
}

export default App;
