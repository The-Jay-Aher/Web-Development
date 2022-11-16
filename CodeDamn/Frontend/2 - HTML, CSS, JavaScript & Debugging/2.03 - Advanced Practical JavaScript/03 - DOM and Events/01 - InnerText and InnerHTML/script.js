// document.querySelector is like a css selector
// so whatever you write in css for selecting an element
// you can use it in js
const button = document.querySelector('button');

button.onclick = () => {
	// button.innerText = 'something else';
	// button.innerHTML = '<b>Something</b> else';
	// const h1 = document.createElement('h1');
	// h1.innerText = 'Wow this is so magical';
	// Append will add the element below the connected element that is button
	// button.append(h1);
	// Prepend will add the e;element above the connected element that is button
	// You can also give multiple inputs to both append and prepend
	// button.prepend(h1, 'hello')

	// setTimeout(() => {
	// 	h1.remove();
	// }, 1000);

	// To remove a button onclick
	button.remove();
};
