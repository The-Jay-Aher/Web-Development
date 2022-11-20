import React, { useState } from 'react';
import Custom from './Custom';

let counter = 0;

function App() {
	const [counter, setCounter] = useState(0);

	// All the functions regarding a component should be in a single scope
	function increase() {
		// console.log(`I was pressed`);
		// We cannot use counter++ as counter is a const
		// setCounter(counter + 1)
		// setCounter('sdsdsd')
		// setCounter(function (oldCounterValue) {
		// 	// return 200
		// 	return oldCounterValue + 1;
		// });
		setCounter((oldCounterValue) => oldCounterValue + 1);
	}

	function decrease() {
		// console.log(`I was pressed`);
		// setCounter(counter - 1);
		setCounter((oldCounterValue) => oldCounterValue - 1);
		
	}

	// function counter() {}

	return (
		<div>
			{/* <Header /> */}
			{/* <Custom  name='Jay' /> */}
			{/* <h1>Hello World {2 * 2}</h1> */}
			<h1>Counter: {counter}</h1>
			<button onClick={increase}>Increase the Counter</button>
			<button onClick={decrease}>Decrease the Counter</button>
			{/* <Custom name={age ** 2} greetingMessage='Hola' /> */}
		</div>
	);
}

export default App;
