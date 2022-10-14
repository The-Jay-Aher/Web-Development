// GLOBALS - NO WINDOW!!!

// __dirname - path to current library
// __filename - file name
// require - function to use modules (CommonJs)
// module - info about the current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
	console.log('hello world');
}, 1000);
console.log(__filename);
