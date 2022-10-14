const timer = document.querySelector('#time span');

setInterval(() => {
	timer.innerText = new Date().toLocaleString();
}, 1000);

function getMeAPromise() {
	// Fetch is a browser based api which allows you to make network request
	// Fetch returns a promise
	//  The promise can be in 2 states
	// 1. Pending -> It is still waiting for that resource to respond with that particular promise to evaluate. So it can be in pending for arbitrary amount of time depending on how much time it takes.
	// 2. Resolved -> YOu actually got the value you were expecting there was no error, there was nothing shown at any point and it basically a developer construct when do you actually want to say that the promise has resolved or not.
	// 3. Rejected -> Usually implies that something went wrong, something failed that we are throwing this as rejected, so that you can maybe handle it as an error in your application.
	// A promise when it is Resolved or Rejected, it is done for good, you cannot move the promise state
	return fetch('https://asodafisdfdsjf');
}

// We use .then
const promise = getMeAPromise();

// If the promise status changes to Resolved. JS calls the then function, and for Rejected status JS will check if we have catch function
promise
	.then((result) => {
		console.log('Got something -> ', result);
	})
	.catch((error) => {
		console.log('Promise Fail: ', error);
	});

console.log(promise);
