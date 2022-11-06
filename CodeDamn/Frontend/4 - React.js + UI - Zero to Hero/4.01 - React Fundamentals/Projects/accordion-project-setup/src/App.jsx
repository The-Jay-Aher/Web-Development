import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
	return (
		<div>
			<h2>Accordion Project Setup</h2>
			<main>
				<div className='container'>
					<h3>FAQ</h3>
					<section className='info'>
						{/* Mine */}
						{/* <SingleQuestion title="something"/>
						{data.map(question => {
							return <h2>{question.title}</h2>
							// console.log(question.title);
						})} */}
						{/* CodeDamn */}
						{data.map((question) => {
							return <SingleQuestion title={question.title} info={question.info} id={question.id} />;
						})}
					</section>
				</div>
			</main>
		</div>
	);
}

export default App;
