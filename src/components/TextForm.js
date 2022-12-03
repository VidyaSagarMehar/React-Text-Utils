import React, { useState } from 'react';

export default function TextForm(props) {
	const handleCopy = () => {
		var text = document.getElementById('exampleFormControlTextarea1');
		text.select();
		navigator.clipboard.writeText(text.value);
	};
	const handleUpClick = () => {
		// console.log('Uppercase was clicked' + text);
		let newText = text.toUpperCase();
		setText(newText);
	};
	const handleLowerClick = () => {
		// console.log('Uppercase was clicked' + text);
		let newText = text.toLocaleLowerCase();
		setText(newText);
	};

	const handleClearClick = () => {
		setText('');
	};
	const handleReverseClick = () => {
		let reverseText = text.split('').reverse().join('');
		setText(reverseText);
	};
	const handleOnChange = (event) => {
		// console.log('Uppercase was clicked');
		setText(event.target.value);
	};

	const handleExtraSpace = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(' '));
	};

	const [text, setText] = useState('Type here');
	// text = 'new text' // Wrong way
	// setText('new text')// Correct way to change the state

	return (
		<>
			<div className="mb-3 container">
				<h1> {props.heading}</h1>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="10"
					value={text}
					onChange={handleOnChange}
				></textarea>
				`
				<button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
					Copy
				</button>
				<button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
					Conver to Uppercase
				</button>
				`
				<button
					className="btn btn-primary mx-1 my-2"
					onClick={handleLowerClick}
				>
					Conver to Lowercase
				</button>
				<button
					className="btn btn-primary mx-1 my-2"
					onClick={handleClearClick}
				>
					Clear TextArea
				</button>
				<button
					className="btn btn-primary mx-1 my-2"
					onClick={handleReverseClick}
				>
					Reverse Text
				</button>
				<button
					className="btn btn-primary mx-1 my-2"
					onClick={handleExtraSpace}
				>
					Remove Extra Space
				</button>
			</div>
			<div className="container my-3">
				<h3>Your text summary</h3>
				<p>
					{text.split(' ').length} word and {text.length} characters
				</p>
				<p>{0.008 * text.split(' ').length} Minutes read</p>

				<h3>Preview</h3>
				<p>{text}</p>
			</div>
		</>
	);
}
