const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from Node.js App deployed with Kubernetes!');
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
