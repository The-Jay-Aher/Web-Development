const button = document.querySelector('button');
const div = document.getElementById('something');

// Here capture: true means
button.addEventListener('click', clickHandler, { capture: false, once: true });
div.addEventListener('click', clickHandler2, { capture: true, once: true });

function clickHandler(event) {
	// alert('I am fired!');
	// button.innerText = 'Your one-time random number: ' + Math.random();
	button.innerText = 'From button';
	// To stop the addEventListener from propagation, we use
	// Here propagation means when we click on button its parent click event
	// is also executed
	event.stopPropagation();
}

function clickHandler2() {
	alert('From div');
}
