import React from 'react';
import Custom from './Custom';
import Header from './header';

let age = 20;

function App() {
	return (
		<div>
			<Header />
			{/* <Custom  name='Jay' /> */}
			<Custom name={age ** 2} greetingMessage='Hola' />
		</div>
	);
}

export default App;
