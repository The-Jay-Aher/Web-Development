const timer = document.querySelector('#time span');

function promiseSetTimeout() {
	return Promise((reject, resolve) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}

// async function boot() {
// 	const fn1 = Promise.resolve('s');

// 	console.log(fn1, fn1 === 's');

// 	const data2 = await promiseSetTimeout();
// 	console.log('Statement 2');

// 	const data3 = await promiseSetTimeout();
// 	console.log('Statement 3');
// }

// boot();

// Logic to fetch all the files
async function fetchAll() {
	const req1 = fetch('data1.json');
	// const data1 = await req1.json();

	const req2 = fetch('data2.json');
	// const data2 = await req2.json();

	const req3 = fetch('data3.json');
	// const data3 = await req3.json();

	// Promise.all is a inbuilt utility or function, it accepts an array of promises
	const promise = Promise.all([req1, req2, req3]);

	// console.log(await promise);
	const responses = await promise;
	// [response, response, response]

	//  When you call a response.json() on another object we get another promise
	// Response.json() ->Promise[Promise, Promise, Promise]

	const json = await Promise.all(responses.map((t) => t.json()));
	console.log(json);
	// console.log(req1, req2, req3);
	// console.log(data1, data2, data3);
}

fetchAll();
