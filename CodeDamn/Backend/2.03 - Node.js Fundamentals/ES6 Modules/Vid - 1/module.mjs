export function square(num) {
	return num ** 2;
}

export function internal_cube(num) {
	return num ** 3;
}

// module.exports = {
// 	square,
// };
// The above way is not the way ES6 works

// 1st way of exporting
// export default square;

// 2nd way of exporting
// export { square, internal_cube as cube };

// 3rd way of exporting
// export function cube(num) {
// 	return num ** 3;
// }

export const num = 5;
