const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/static', express.static(path.resolve(__dirname, 'public')));

app.get('/something', (req, res) => {
	res.send("Hey!, Something's here");
});

app.post('/something', (req, res) => {
	res.send('This is usually not visible');
});

app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
})
