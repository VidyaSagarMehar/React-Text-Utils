import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
	const [mode, setMode] = useState('light'); // wether dark mode is enabled or not
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1000);
	};
	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = '#393c3f';
			showAlert('Dark mode has been enabled', 'success');
			// document.body.style.backgroundColor = 'grey';
		} else {
			setMode('light');
			document.body.style.backgroundColor = '#FFFFFF';
			showAlert('Light mode has been enabled', 'success');
			// document.body.style.backgroundColor = 'white';
		}
	};
	return (
		<>
			<Navbar mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className="container my-4">
				<TextForm
					showAlert={showAlert}
					heading="Enter text here to Analyz"
					mode={mode}
				/>
			</div>
			<About />
		</>
	);
}

export default App;
