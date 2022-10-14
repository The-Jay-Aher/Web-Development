const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// THis is just a mini and better version of app.get()
//  We first give it a path where the data will be available
//  Then we define the path with the path module
//  __dirname just adds the current directory address to the beginning of the data
// and then we add public as public is the main folder from which we will take the data
app.use('/static', express.static(path.resolve(__dirname, 'public')));

// app.get('/', (req, res) => {
// 	// This is how you send a regular file to a website
// 	//  You can also send Js and CSS file but we have better methods for doing that than this one
// 	res.sendFile(path.resolve(__dirname, 'public/index.html'));
// });

app.get('/something', (req, res) => {
	res.send("Hey!, Something there's here");
});

app.get('/something', (req, res) => {
	res.send('This is usually not visible');
});

app.listen(port, () => {
	console.log(`Listening in port ${port}`);
});
