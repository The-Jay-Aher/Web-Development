import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
	// take out tours from props
	const { tours } = props;
	return (
		<section>
			<div className='title'>
				<h2>All Tours</h2>
				<div className='underline'></div>
			</div>
			<div>
				{tours.map((tour) => (
					<Tour {...tour} key={tour.id} />
				))}
			</div>
		</section>
	);
};

export default Tours;
