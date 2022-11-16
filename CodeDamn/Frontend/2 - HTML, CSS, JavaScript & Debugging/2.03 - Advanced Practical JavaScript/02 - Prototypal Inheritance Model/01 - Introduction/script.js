const a = {
	prop1: 1
}

const b = {
	prop2: 10
}

const c = {
	prop3: 100
}

const d = {
	prop4: 1000
}

// Here __proto__ connects the a object to another object
// Here d is connected to c 
d.__proto__ = c

// Here c is connected to b
c.__proto__ = b

// Here b is connected to a
b.__proto__ = a 

// Proto works as a tree
// If we type d.prop4, with all the rest of the objects having prop4 in them
// It will select the first prop4 and return you that value
// The searching of a element as long as the __proto__ does not return a 'null' value.