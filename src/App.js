import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
	return (
		<>
			<Navbar />
			<div className="container my-4">
				<TextForm heading="Enter text here to Analyz" />
			</div>
			<About />
		</>
	);
}

export default App;
