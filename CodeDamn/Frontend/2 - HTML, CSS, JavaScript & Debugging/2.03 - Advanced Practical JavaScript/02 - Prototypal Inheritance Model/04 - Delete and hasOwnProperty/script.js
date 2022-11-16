const obj = {
	prop1: 100
}

const obj2 = {
	prop2: 200,
	prop5: 500
}

obj2.__proto__ = obj

// If we do obj2.prop1 we will get 100 as output
// But if we would not know whether prop1 belongs to obj2 ot not
// To check that we can use obj2.hasOwnProperty('prop1') -> false
// This means that prop1 does not belong to obj2
// Similarly, obj2.hasOwnProperty('prop2') -> true
// As prop2 belongs to obj2 it will be return a true