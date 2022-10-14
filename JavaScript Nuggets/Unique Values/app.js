// Unique Values
const menu = [
	{
		name: 'pancakes',
		category: 'breakfast',
	},
	{
		name: 'burger',
		category: 'lunch',
	},
	{
		name: 'steak',
		category: 'dinner',
	},
	{
		name: 'bacon',
		category: 'breakfast',
	},
	{
		name: 'eggs',
		category: 'breakfast',
	},
	{
		name: 'pasta',
		category: 'dinner',
	},
];

const categories = ['all', ...new Set(menu.map((item) => item.category))];

console.log(categories);

// map - get all instances
// new Set - narrow down and only return the unique value's
// ['all', ...] = turn it back to an array

const result = document.querySelector('.result');
result.innerHTML = categories
	.map((category) => {
		return `<button>${category}</button>`;
	})
	.join('');

// Here as we are returning an array we have commas in the output but by .join('') we can remove those commas.
