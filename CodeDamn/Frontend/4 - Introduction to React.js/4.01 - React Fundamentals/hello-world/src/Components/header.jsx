import { React } from 'react';

const amIAbove18 = false;

function Header() {
	return (
		<header>
			{/* <h1>{amIAbove18 ? <p>I am above 18</p> : null}</h1> */}
			<h1>{amIAbove18 ? <p>I am above 18</p> : <p>I am too small</p>}</h1>
		</header>
	);
}

export default Header;
