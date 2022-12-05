import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
	const [mode, setMode] = useState('light'); // wether dark mode is enabled or not
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#393c3f';
			// document.body.style.backgroundColor = 'grey';
		} else {
			setMode('light');
			document.body.style.backgroundColor = '#FFFFFF';
			// document.body.style.backgroundColor = 'white';
		}
	};
	return (
		<>
			<Navbar mode={mode} toggleMode={toggleMode} />
			<div className="container my-4">
				<TextForm heading="Enter text here to Analyz" mode={mode} />
			</div>
			<About />
		</>
	);
}

export default App;
