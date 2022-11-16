const button = document.querySelector('#b1');
const button2 = document.querySelector('#b2');

// The reason we are not creating an arrow function is 
// You need the exact address of the function to remove the removeEventListener
// So it is not possible
// Therefore, we just give a function name and the we can access the address of the function
// by the function name 
button.addEventListener('click', clickHandler);
button2.addEventListener('click', stopListener);

function clickHandler() {
	// alert('I am fired!');
	button.innerText = Math.random();
}

function stopListener() {
	button.removeEventListener('click', clickHandler);
}
