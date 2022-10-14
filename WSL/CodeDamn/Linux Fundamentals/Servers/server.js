const http = require('http');

// Other Modules ->
// Os, Fs, Path, Url

const server = http.createServer((req, res) => {
  // The route `/` should return a status code of 418
  res.writeHead(418, {'Content-Type': 'text/plain'})
  res.write('Hello client over there!!!!')
  res.end()
})

server.listen(8000, () => {
  console.log('Hey we are ready to grab the request');
})