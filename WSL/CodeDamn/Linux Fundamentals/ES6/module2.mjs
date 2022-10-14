export function square(num) {
  return num ** 2;
}

export function internal_cube(num) {
  return num ** 3;
}

// Common JS Way
// module.exports = {square}

// ES6 Way

// ES6 - 1st Way
// export default square
//  It means that the square module will be available directly
//  You can only have 1 default export per module

// ES6 - 2nd Way
// Here if you want to export the function with a different name you use the as keyword. 
// export {
//   square, internal_cube as cube
// };

// ES6 - 3rd Way
// This will only export the function with the export keyword
export function cube(num) {
  return num ** 3;
}