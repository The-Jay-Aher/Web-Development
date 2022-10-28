const timer = document.querySelector('#time span');

setInterval(() => {
	timer.innerText = new Date().toLocaleString();
}, 1000);

function getMeAPromise() {
	return fetch('./data.json');
}

const promise = getMeAPromise();

promise
	.then((result) => {
		console.log('Passed 1');
	})
	.then((data) => {
		console.log('Passed 2');
	})
	.then((r) => {
		console.log('Passed 3');
		throw new Error('Yoooo');
		// Whenever in a chain of promises a single promise throws an error, the rest of the chain is eliminated
	})
	.then((es) => {
		// console.log('Will this we executed?');
		console.log('Passed 4');
	})
	.then((er) => {
		console.log('Passed 5');
	})
	.catch((err) => {
		console.log('Oops, someone crashed in the line');
	})
	.then((qw) => {
		console.log('Passed 6');
	});

console.log(promise);
