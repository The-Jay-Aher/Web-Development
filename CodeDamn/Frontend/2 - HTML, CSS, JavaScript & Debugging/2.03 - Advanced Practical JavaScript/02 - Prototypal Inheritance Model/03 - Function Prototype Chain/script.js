function Car() {
	this.fuel = 100;
	this.tire = 4;
}

Car.prototype.type = 'vehicle';

Car.prototype.addFuel = function (amount) {
	this.fuel += amount;
};
// If tou do not call it with new keyword
// Then by doing window.tire on the console will give us -> 4
// Car()

// If you call it with new
// window.tire will give you a `null` value
// but obj will give teh whole class
const obj = new Car();
const obj2 = new Car();

obj.addFuel(100)
obj2.addFuel(300)