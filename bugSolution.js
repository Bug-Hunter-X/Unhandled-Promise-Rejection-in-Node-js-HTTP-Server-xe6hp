const http = require('http');

const server = http.createServer((req, res) => {
  someAsyncOperation()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    })
    .catch(error => {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

async function someAsyncOperation() {
  const success = Math.random() < 0.5;
  if (success) {
    return Promise.resolve('Operation successful');
  } else {
    return Promise.reject(new Error('Simulated asynchronous error'));
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});