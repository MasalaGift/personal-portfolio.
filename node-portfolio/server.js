const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    'views',
    req.url === '/' ? 'index.html' : req.url.endsWith('.html') ? req.url : req.url + '.html'
  );

  const extname = path.extname(filePath);
  let contentType = 'text/html';

  if (req.url.startsWith('/css/')) {
    filePath = path.join(__dirname, 'public', req.url);
    contentType = 'text/css';
  } else if (req.url.startsWith('/js/')) {
    filePath = path.join(__dirname, 'public', req.url);
    contentType = 'application/javascript';
  } else if (req.url.startsWith('/images/')) {
    filePath = path.join(__dirname, 'public', req.url);
    contentType = 'image/jpeg';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>', 'utf-8');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));