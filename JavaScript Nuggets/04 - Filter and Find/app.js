// Filter - Returns a new array, can manipulate the size of new array (unlike map), return based on condition.
// Find - Returns a single instance (object), returns the first match, if no match - undefined

const people = [
	{ name: 'bob', age: 20, position: 'developer' },
	{ name: 'peter', age: 25, position: 'designer' },
	{ name: 'susy', age: 30, position: 'the boss' },
	{ name: 'anna', age: 35, position: 'intern' },
];
const fruits = ['orange', 'pear', 'lemon'];
// Filter
const youngPeople = people.filter((person) => {
	// Original Way
	// if (person.age < 30) {
	// 	return person;
	// }

	// Shortcut
	return person.age < 30;
});
console.log(youngPeople);

// Original Way
// const developer = people.filter((person) => {
// 	if (person.position === 'developer') {
// 		return true;
// 	}
// });

// One Liner
const developer = people.filter((person) => {
	//  without the return keyword nothing would be returned
	//  The return keyword is not needed for single line arrow
	return person.position === 'developer';
});

console.log(developer);

// No match
const seniorDevs = people.filter((person) => person.position === 'developer');

console.log(seniorDevs);

// Find
const peter = people.find((person) => person.name === 'peter');
console.log(peter);

const fruit = fruits.find((fruit) => fruit === 'lemon');
console.log(fruit);

// No match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// Multiple Matches - First match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);
