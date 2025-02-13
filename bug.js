const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    //Error handling is missing here
    console.error('Error:', error);
  });
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that may fail
  const success = Math.random() < 0.5; // 50% chance of success
  if (success) {
    return Promise.resolve('Operation successful');
  } else {
    return Promise.reject(new Error('Simulated asynchronous error'));
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});