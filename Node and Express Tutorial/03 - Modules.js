// COMMON JS, every file in node is module (by default)
// Modules - Encapsulated Code (only share the minimum exports)

const names = require('./04 - Names');
const sayHi = require('./05 - utils');
const data = require('./06 - Alternative Syntax');
require('./07 - Mind Grenade');

console.log(sayHi);
console.log(data);

sayHi('John');
sayHi(names.john);
sayHi(names.peter);
