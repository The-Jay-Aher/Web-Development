const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.post('/data', (req, res) => {
	// The main place where the information will be stored
	console.log(req.body);
	// Sending a OK status to the network status
	res.json({ status: 'ok' });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
