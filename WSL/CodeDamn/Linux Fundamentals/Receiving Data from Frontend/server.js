const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// The express. static() middleware returns an HTTP 404 if it can't find a file, so that means you should typically call app.
app.use('/', express.static(path.resolve(__dirname, 'public')));

app.post('/data', (req, res) => {
	//  One way of sending response
	// res.send('ok');
	//
	console.log(req.body);
	// 2nd way of sending response
	res.json({ status: 'ok' });
});

app.listen(port, () => {
	console.log(`Listening on the Port ${port}`);
});
