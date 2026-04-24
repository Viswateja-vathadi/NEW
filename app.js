function sum(a, b) {
  return a + b;
}

module.exports = sum;

// simple server (optional)
if (require.main === module) {
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.end('Hello from Node.js App 🚀');
  });

  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}
