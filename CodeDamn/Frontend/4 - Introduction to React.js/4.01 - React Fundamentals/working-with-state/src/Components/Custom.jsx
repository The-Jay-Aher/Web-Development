import React from 'react';

function Custom(props) {
	return (
		<h1>
			{props.greetingMessage}, {props.name}
		</h1>
	);
}

export default Custom;
