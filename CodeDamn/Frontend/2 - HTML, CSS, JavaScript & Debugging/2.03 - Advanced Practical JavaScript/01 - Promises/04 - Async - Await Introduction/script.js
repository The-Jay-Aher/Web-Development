const timer = document.querySelector('#time span');

function promiseSetTimeOut() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}

// 1st - Way
// promiseSetTimeOut()
// 	.then((data) => {
// 		console.log('Statement - 1');
// 		return promiseSetTimeOut();
// 	})
// 	.then((data1) => {
// 		console.log('Statement - 2');
// 		return promiseSetTimeOut();
// 	})
// 	.then((data2) => {
// 		console.log('Statement - 3');
// 	});

//  2nd - Way
// Equivalent of the first way
// Whenever you are using await inside a function make sure that it is inside a async function
async function boot() {
	// const data = await promiseSetTimeOut();

	try {
		// const req = await fetch('/data.json');
		const req = await fetch('http://sadfasfd.asdfnjas');
		console.log('Yup! It worked');
	} catch (err) {
		console.log('Something went wrong', err);
	}
}

async function promise1() {
	throw new Error('wow');
}

// boot();
promise1();
console.log('Still Works');
