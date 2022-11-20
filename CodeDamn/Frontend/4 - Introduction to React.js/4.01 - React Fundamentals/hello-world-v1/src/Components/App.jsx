import React from 'react';

// If you use a && in a statement it will execute the next command
// They will keep on checking till a false value such as, false, undefined, 0 come,
// When a false value is encountered it will stop the execution at the false point.
// console.log(true && false);

// console.log('jay' && 'aher' && 'j' && false && 'a');
console.log('jay' && 0 && 'aher');

let age = 24;

function App() {
	return (
		<div>
			<h1>Hello World</h1>
			{/* {true && <p>Which maybe visible</p> && undefined && <p>This will not be visible</p>} */}
			{/* {0 && <p>Maybe which is visible</p>} */}
			{/* Ternary operator */}
			{/* {age > 18 ? <p>Adult</p> : <p>Child</p>}
			{age > 18 && <p>This is visible</p>} */}
			
		</div>
	);
}

export default App;
