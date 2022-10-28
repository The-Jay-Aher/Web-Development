const timer = document.querySelector('#time span');

// setInterval(() => {
// 	timer.innerText = new Date().toLocaleString();
// }, 1000);

// function getMeAPromise() {
// 	return fetch('/data.json');
// }

// const promise = getMeAPromise();

// console.log(promise);

setTimeout(() => {
	timer.innerText = new Date().toLocaleString();
}, 1000);
