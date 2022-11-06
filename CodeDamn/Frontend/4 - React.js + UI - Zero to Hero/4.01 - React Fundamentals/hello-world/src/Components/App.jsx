import React from 'react';
import Custom from './Custom';
import Header from './header';

let age = 20;

function App() {
	// All the functions regarding a component should be in a single scope
	function buttonClickFunction() {
		console.log(`I was pressed`);
	}

	return (
		<div>
			<Header />
			{/* <Custom  name='Jay' /> */}
			<button onClick={buttonClickFunction}>Click Me</button>
			<Custom name={age ** 2} greetingMessage='Hola' />
		</div>
	);
}

export default App;
