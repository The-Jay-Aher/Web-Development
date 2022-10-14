const timer = document.querySelector('#time span');

setInterval(() => {
	timer.innerText = new Date().toLocaleString();
}, 1000);

function getMeAPromise() {
	return fetch('./data.json');
}

const promise = getMeAPromise();

// Way - 1
// promise
// 	.then((result) => {
// 		console.log('Got something -> ', result);

// 		// 1. It is a actual value
// 		// 2. It is a promise
// 		// 3. You don't return anything -> If you don't return anything, it explicitly returns undefined
// 		return undefined;
// 	})
// 	.then(() => {
// 		return undefined;
// 	})
// 	.then(() => {
// 		return undefined;
// 	})
// 	.then(() => {
// 		// console.log('Will this we executed?');
// 		return undefined;
// 	});

// Way - 2
// promise
// 	.then((result) => {
// 		console.log('Got something -> ', result);
// 		// Here data.json is a promise
// 		console.log('My JSON data = ');

// 		result.json().then((data) => {
// 			console.log('Finally', data);
// 		});
// 		// 1. It is a actual value
// 		// 2. It is a promise
// 		// 3. You don't return anything -> If you don't return anything, it explicitly returns undefined
// 	})
// 	.then(() => {})
// 	.then(() => {})
// 	.then(() => {
// 		// console.log('Will this we executed?');
// 	});

// Way - 1 == Way - 2

// Way - 3
// It is possible due to the flat structure of promises in JS
promise
	.then((result) => {
		console.log('Got something -> ', result);
		// Here data.json is a promise
		console.log('My JSON data = ');

		return result.json();
	})
	.then((data) => {
		console.log('Finally', data);
	})
	.then(() => {})
	.then(() => {
		// console.log('Will this we executed?');
	});

console.log(promise);
