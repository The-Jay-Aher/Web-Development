const a = {
	method1() {
		return 'hello world'
	}
	// prop4: 1
}

// const b = Object.create(a)
	
const b = {
	// x: 100
	method2() {
		return 'yolo world'
	}
}

// Here we set b as a prototype of a
Object.setPrototypeOf(b, a)



