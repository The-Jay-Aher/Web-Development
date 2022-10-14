const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// Return the systems uptime
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
};

console.log(currentOs);
