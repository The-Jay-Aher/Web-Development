const timer = document.querySelector('#time span');

setInterval(() => {
	timer.innerText = new Date().toLocaleString();
}, 1000);

function getMeAPromise() {
	return fetch('data.json');
}

// console.log(getMeAPromise());

const promise = getMeAPromise();

console.log(promise);

promise.then((result) => {
	console.log(result);
});
