const timer = document.querySelector('#time span');

// setTimeout(() => {
// 	timer.innerText = new Date().toLocaleString();
// }, 1000);

function promiseSetTimeout() {
	// return new Promise((resolve, reject) => {
	// 	resolve(100);
	// });
	return Promise.resolve(100);
}

// console.log(promiseSetTimeout());
console.log();
promiseSetTimeout().then(() => {
	console.log('Written text to the screen');
});
