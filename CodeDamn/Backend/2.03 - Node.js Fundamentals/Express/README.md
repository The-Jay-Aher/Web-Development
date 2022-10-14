# Express

We have to do a lot of things for creating a raw HTTP server.
So for this we use express.

## What happens in SERVER.JS

1. First we install the express module by doing `npm i express` or `npm install express`

2. Then we import the express module which is installed by `const express = require('express')` or `import Express from 'express'`

3. Then we create an app object which is calling the express module, which we just imported.

4. Then we used app.get() -> A function for routing the HTTP requests to the path which is being specified which is inputted as first argument.
   E.g -

   ```javascript
   app.get('/', (req, res) => {
   	res.send('Hello World');
   });
   ```

5. Then the app listen to the specified port `app.listen(port)` or if we want add more details we can say that `app.listen(port, () => {console.log('Hello World')})`

## 5 Types of HTTP Commands

1. GET - How you get the information - app.get()
2. PUT - Change Information - app.put()
3. POST - Post Information / Add Information - app.post()
4. DELETE - Delete Information - app.delete
5. PATCH

GET and POST are the 2 of the most commonly used features.

With express we can define the certain behavior on certain paths depending on what the method is.
E.g-

```javascript
app.get('/something', (req, res) => {
	res.send('Hey Something is Here');
});
```

### GET

GET is used as `app.get()`

```javascript
app.get('/', (req, res) => {
	res.send('GET request to the homepage');
});
```

The other 5 have same commands as `app.get()`.
The examples of those 5 are given below

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/what-is-my-method', (req, res) => {
	res.send('GET');
});

app.post('/what-is-my-method', (req, res) => {
	res.send('POST');
});

app.put('/what-is-my-method', (req, res) => {
	res.send('PUT');
});

app.delete('/what-is-my-method', (req, res) => {
	res.send('DELETE');
});

app.patch('/what-is-my-method', (req, res) => {
	res.send('PATCH');
});
// process.enx.PUBLIC_PORT needed for codedamn
// We can use any port we want, we mainly use the 3000 port value.
app.listen(process.env.PUBLIC_PORT);
```

## Sending a File to Browser

1. Sending a file means sending some static data to the server, which sending a file instead of sending something like a hello world or other.
   E.g- Send a HTML file.
2. To do that we need to import path `const path = require('path')` or `import path form 'path'`
3. Path is internal node module and we do not need to install anything to work on it.
4. Here instead of `res.send()` we use `res.sendFile()`. This will allow us to send an actual file to the server.
   E.g-

   ```javascript
   app.get('/', (req, res) => {
   	//res.send('hello world');
   	res.sendFile(path.resolve(__dirname, 'public/index.html'));
   });
   ```

5. It will search for the folder public in the current directory, and it's going to look for a file with a name of `index.html`.
6. This is a way to send any regular file using `res.sendFile()` as a response, we can also send a javascript file or a css file if we want to.

## Static Assets

In JS there are a lot of ways to use static assets to the frontend.That is by saying,
To send a file to the front-end without using having an individual route for every file.
It is impossible to have individual routes.

```javascript
app.use('`/', express.static(path.resolve(__dirname, 'public')));
```

The function `express.static` shows which directory we want to serve our server.

\_\_dirname -> Current working directory name.

1. We want the public folder to be statically delivered every time.
2. We add '/' as we want the static folder to the root of the domain.
3. Express should look inside the public folder, to check there is a file depending on what the user has requested.
4. And if there is then just deliver that particular file.

```javascript
// For now
app.use('`/static', express.static(path.resolve(__dirname, 'public')));
```

We want the static asset to be delivered on the root of the domain.

## Accept Data from FrontEnd to BackEnd in NodeJS

By accepting it means that it could be any form submission or any feed which you want to get.
It could be any sort of behavior.

For now we have created a web page which will help us.

`res.json({status: 'ok'})` it is used to send a json to the webpage.
Here status ois o which means that when the process is done the webpage wiil show the status symbol of ok.
