import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
	return (
		<>
			<Navbar />
			<div className="container my-4">
				<TextForm heading="Enter text here to Analyz" />
			</div>
		</>
	);
}

export default App;
