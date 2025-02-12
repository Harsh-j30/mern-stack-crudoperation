import http from 'http';

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status for success
  res.setHeader('Content-Type', 'text/plain'); // Content type
  console.log(`${req.url}`)
  res.end('Hello, World!'); // Response body
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
