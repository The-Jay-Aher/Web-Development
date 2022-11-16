const timer = document.querySelector('#time span');

function promiseSetTimeOut() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
}

async function fetchAll() {
	// const fn1 = Promise.resolve('s');
	// console.log(fn1, fn1 === 's');
	// const data2 = await promiseSetTimeOut();
	// console.log('Statement - 2');
	// const data3 = await promiseSetTimeOut();
	// console.log('Statement - 3');
	const req1 = fetch('data1.json');
	// const data1 = await req1.json()

	// const req2 = fetch('data2.json');
	const req2 = fetch('http://sadfsadf-asafjsak-dsffasd');
	// const data2 = await req2.json()

	const req3 = fetch('data3.json');
	// const data3 = await req3.json()

	// await req1
	// await req2
	// await req3

	// Promise.all accepts a array of promises by just giving promises name will not work
	// Promise.all returns a promise that will be fulfilled if all the promises inside are fulfilled
	const promise = Promise.allSettled([req1, req2, req3]);
	// console.log(await promise);

	try {
		const responses = await promise;

		console.log(responses);

		// This filters the request if they are fulfilled we will get them in successRequest
		// By making it a single line we do not need to add a return key keyword
		
		//1st way - 1 liner 
		// const successRequest = responses.filter((response) => response.status==='fulfilled')

		// 2nd way - Multiple Lines
		const successRequest = responses.filter((response) => {
			return response.status === 'fulfilled';
		});
		// Both 1 and 2 are the same code but just written in different manner
		
		console.log(successRequest);

		// const json = await Promise.all(responses.map((t) => t.json()));

		// console.log(json);
	} catch (error) {
		console.log('Something went wrong: ', error);
	}

	// console.log(req1, req2, req3);
	// console.log(data1, data2, data3);
}

fetchAll();
