// const express = require('express');
import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
	res.send('Hello, Jay!');
});
app.listen(1337);

// import Express from 'express';
// const app = Express();
// const port = 3000;

// app.get('/', (req, res) => {
// 	res.send('GET request to the homepage');
// });

// app.listen(port, () => console.log('Listening on port' + port));
