const timer = document.querySelector('#time span');

setInterval(() => {
	timer.innerText = new Date().toLocaleString();
}, 1000);

const a = 1 + 1;

const b = () => {
	1 + 1;
};

function getMeAPromise() {
	return fetch('/CodeDamn/Advanced JS/Vid - 1/data.json');
	// return <something> // Here something which we are returning is a promise
}

// console.log(getMeAPromise());

const promise = getMeAPromise();

console.log(promise);
// console.log(promise);

promise.then((result) => {
	// This function is gonna be called when getMeAPromise is going to be the result.
	console.log(result);
});

console.log(promise);
