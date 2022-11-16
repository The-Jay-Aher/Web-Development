const button = document.querySelector('button');

// By setting the third property of the event listener -> once as true
// Will make the addEventListener deregister itself after it is executed once  
button.addEventListener('click', clickHandler, {
    once: true
});

function clickHandler() {
	// alert('I am fired!');
    button.innerText = 'Your one-time random number: ' + Math.random()
}
