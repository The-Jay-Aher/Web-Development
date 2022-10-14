# ES6 Modules

## CommonJs Export

```javascript
module.exports = {
	square, //Here square is a function in our file
};
```

## ES - 6 Export

There are multiple ways to export modules in ES6

You can only have one default module export.

### 1st way of exporting

```javascript
export default square;
```

To import the square function we use,

```javascript
import square from './module.mjs';
// While importing something remember to add full path and the file extension properly.
```

### 2nd way of exporting

```javascript
export { square, cube };
```

To import the functions that are exported

```javascript
import { square, cube } from './module.mjs';
```

In this type of exports we can import whichever functions are required by us.
Such as we can only import square, or cube.
And the code would work perfectly.
To import any function in above way we need to place the function name them within {'semicolon'}.

### 3rd way of exporting

```javascript
export function cube(num) {
	return num ** 3;
}
```

Important notes ->

1. Whenever we use these curly braces we are never going to use the default export.

## Export A function with a different name

```javascript
function square(num) {
	return num ** 2;
}

function internal__cube(num) {
	return num ** 3;
}

export { square, internal__cube as cube };
```

## Importing a function as a different name

Renaming the Import works the same way as the exports work

E.g:-

```javascript
import { cube as cubeThisNumber } from './module.js';
```

The above is a example of a **ES6 Import Syntax**, that works in a special way.

## Importing all the functions from a file at once

- Suppose we have too many functions to import then, we can use

```javascript
import * as <any variable name> from './module.mjs'
import * as util from './module.mjs' // variable name is util.
```

## Import all from a single file

### 1st way

We can firstly create a file import every function in it from all the different files.
Then we will export all the imported functions.
Such as,

```javascript
import { square } from './module.mjs';

// And then we can export the square function to after importing it in our file.

export { square };
```

The above method is for having all the imports from a single file.
The above way we do it in a long way, which is not optimal for the system.

### 2nd Way

## Import a Default Exports

```javascript
import anything from './module.mjs';
```

Here anything can be any text possible.
We can also use something like,

```javascript
import anything, { util } from './module.js';
```

The above syntax works just fine.
