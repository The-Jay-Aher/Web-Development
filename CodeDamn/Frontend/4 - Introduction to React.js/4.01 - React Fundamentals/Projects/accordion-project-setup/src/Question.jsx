import React, { useState } from 'react';
const Question = (props) => {
	const { title, info } = props;
	const [sign, setSign] = useState(false);

	return (
		<article className='question'>
			<header>
				<h4>{title}</h4>
				<button className='btn' onClick={() => setSign((sign) => !sign)}>
					{sign ? '-' : '+'}
				</button>
			</header>
			<p>{sign && info}</p>
		</article>
	);
};

export default Question;
