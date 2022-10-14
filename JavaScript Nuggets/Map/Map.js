// MAP Function
// Returns a New Array
// Does not change the size of original array (unlike filter method)
// uses values from original array when making a new one
const people = [
	{
		name: 'bob',
		age: 20,
		position: 'developer',
	},
	{
		name: 'anna',
		age: 25,
		position: 'designer',
	},
	{
		name: 'susy',
		age: 30,
		position: 'the boss',
	},
	{
		name: 'john',
		age: 26,
		position: 'intern',
	},
];

// !st Way - 1st Method
// const ages = people.map((person) => {
// 	return person.age * 2;
// });

// 1st Way - 2nd Method
// const ages = people.map((person) => person.age);

// 2nd Way
const getAges = (person) => person.age;
const ages = people.map(getAges);

console.log(ages);

const newPeople = people.map((item) => {
	return {
		firstName: item.name.toUpperCase(),
		oldAge: item.age + 20,
	};
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('');
//  We use the join since we returned an array so the comma marks would be there to remove them we tell that comma is not needed by .join('')
