const button = document.querySelector('#b1');
const button2 = document.querySelector('#b2');
const h1 = document.querySelector('h1');

button.addEventListener('click', clickHandler);
button2.addEventListener('click', stopListener);

const input = document.querySelector('input');

input.addEventListener('keydown', keyHandler);

// event.stopPropagation() -> stops an event from going upwards in the html tree
// event.preventDefault() -> stops an  event from going downwards from a html tree
// event.preventDefault() -> It says to the browser just stop whatever the default behavior you were supposed to de
function keyHandler(event) {
	event.preventDefault();
	h1.innerText = Math.random();
}

function clickHandler() {
	// alert('I am fired!');
	button.innerText = Math.random();
}

function stopListener() {
	button.removeEventListener('click', clickHandler);
}
