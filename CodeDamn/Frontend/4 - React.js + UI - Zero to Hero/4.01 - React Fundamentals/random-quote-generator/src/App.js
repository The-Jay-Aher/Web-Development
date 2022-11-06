import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

const quotes = [
	'if you are good enough, never do it for free',
	'i am not afraid of a man who practice 1000 kicks 1 time, but rather 1 kick 1000 time.',
	'abc',
	'def',
	'ghi',
];

function App() {
	const [quote, setQuote] = useState(quotes[0]);

	function randomizeQuote() {
		// Math.random returns a number between 0 and 1
		// By multiplying it by quotes.length we get a number between 0 and 5, with 5 almost not reachable
		// THen math.floor removes the numbers decimal part whatever it might be and gives us an integer between 0 to 4
		// Since the max would be 4.999, 5 can't be reached and the floor of 4.999 is 4
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		// For this useCase since we don't require the previous value to determine the current value, we do not use the function approach for setQuote.
		setQuote(randomQuote);
	}
	return (
		<div className='App'>
			<div>{quote}</div>
			<button onClick={randomizeQuote}>Click Me</button>
		</div>
	);
}

export default App;
