import React, { useState } from 'react';

export default function TextForm(props) {
	const handleCopy = () => {
		var text = document.getElementById('exampleFormControlTextarea1');
		text.select();
		navigator.clipboard.writeText(text.value);
		props.showAlert('Text copied to clipboard!', 'success');
	};
	const handleUpClick = () => {
		// console.log('Uppercase was clicked' + text);
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert('Converted to uppercase!', 'success');
	};
	const handleLowerClick = () => {
		// console.log('Uppercase was clicked' + text);
		let newText = text.toLocaleLowerCase();
		setText(newText);
		props.showAlert('Converted to lowercase!', 'success');
	};

	const handleClearClick = () => {
		setText('');
		props.showAlert('Text cleared!', 'success');
	};
	const handleReverseClick = () => {
		let reverseText = text.split('').reverse().join('');
		setText(reverseText);
		props.showAlert('Text has been reversed!', 'success');
	};
	const handleOnChange = (event) => {
		// console.log('Uppercase was clicked');
		setText(event.target.value);
	};

	const handleExtraSpace = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(' '));
		props.showAlert('Extra spaces removed!', 'success');
	};

	const [text, setText] = useState('');
	// text = 'new text' // Wrong way
	// setText('new text')// Correct way to change the state

	return (
		<>
			<div
				className="mb-3 container "
				style={{
					color: props.mode === 'dark' ? 'white' : 'black',
				}}
			>
				<h1> {props.heading}</h1>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="10"
					value={text}
					onChange={handleOnChange}
					style={{
						backgroundColor: props.mode === 'dark' ? '#9e9e9e' : 'white',
						// color: props.mode === 'dark' ? 'white' : 'black',
					}}
				></textarea>

				<button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
					Copy
				</button>
				<button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
					Conver to Uppercase
				</button>

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
			<div
				className="container my-3"
				style={{
					color: props.mode === 'dark' ? 'white' : 'black',
				}}
			>
				<h3>Your text summary</h3>
				<p>
					{text.split(' ').filter((element) => element.length !== 0).length}{' '}
					word and {text.length} characters
				</p>
				<p>
					{0.008 *
						text.split(' ').filter((element) => element.length !== 0)
							.length}{' '}
					Minutes read
				</p>

				<h3>Preview</h3>
				<p>{text.length > 0 ? text : 'Enter somthing to preview here'}</p>
			</div>
		</>
	);
}
