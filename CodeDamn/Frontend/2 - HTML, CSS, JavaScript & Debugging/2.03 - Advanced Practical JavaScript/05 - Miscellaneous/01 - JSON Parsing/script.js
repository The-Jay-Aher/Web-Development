const obj = {
	a: 1,
	b: 'sdfssdfsdf',
};

const pre = document.querySelector('pre');

const jsonString = JSON.stringify(obj);

pre.innerText = jsonString

const objAgain = JSON.parse(jsonString)

pre.innerText = objAgain.b