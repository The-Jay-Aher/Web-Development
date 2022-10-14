const { ok } = require('assert');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

app.use('/', express.static(path.resolve(__dirname, 'Public')));

// app.get('/something', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'Public/index.html'));
// });

// app.post('/something', (req, res) => res.send('These is usually not visible.'));

app.post('/data', (req, res) => {
	// res.send('OK');
	// The place where our information would be stored.
	console.log(req.body);

	// We can also use .json to send a json response and say
	res.json({ status: ok });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
