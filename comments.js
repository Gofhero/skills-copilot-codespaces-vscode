// Create web server with Node.js
// To run this file, open terminal and type "node comments.js"
// Open browser and go to "http://localhost:3000"
// The server will display "Hello World!" on the browser

var http = require('http'); // Load http module

// Create web server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Set response header
  res.end('Hello World!\n'); // Send response
}).listen(3000); // Listen on port 3000

console.log('Server running on http://localhost:3000'); // Output message to console

// End of comments.js