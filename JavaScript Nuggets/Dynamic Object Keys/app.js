// Dot notation
const person = {
	name: 'John',
};

console.log(person.name);
person.age = 25;
console.log(person);

// Square Bracket Notation

const items = {
	'featured-items': ['item1', 'item2'],
};

console.log(items['featured-items']);

let appState = 'loading';
appState = 'error';
const app = {
	// Here we are not setting a appState to the variable but the value present inside the variable to
	[appState]: true,
};

console.log(app);
