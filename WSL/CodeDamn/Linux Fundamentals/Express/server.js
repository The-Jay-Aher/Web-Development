const express = require('express');
// We created the express object which is just calling the express module which was just introduced in the syntax.
const app = express();
const port = 3000;

// Here '/' is the root path, we need to specify the path
// When you open a website the default 'Request Method' is always 'GET'
//  There are REST of other methods ->
//  1. POST (Most Common)
//  2. PUT
//  3. PATCH
//  4. DELETE
//  5. PUT (Most Common)
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/something', (req, res) => {
	res.writeH;
	res.send(`Hey something's here`);
});

// Once the configuration is defined we started the server at port 3000
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
