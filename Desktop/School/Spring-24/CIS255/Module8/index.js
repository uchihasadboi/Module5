const http = require('http');
const fs = require('fs');
const path = require('path');

const page404 = fs.readFileSync('404.html', 'utf-8');

function serveFile(filePath, response) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end(page404);
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        }
    });
}

const server = http.createServer((req, res) => {
    let filePath;

    switch (req.url) {
        case '/':
            filePath = './index.html';
            break;
        case '/about':
            filePath = './about.html';
            break;
        case '/contact-me':
            filePath = './contact-me.html';
            break;
        default:
            filePath = null;
            break;
    }

    if (filePath) {
        const fullPath = path.resolve(__dirname, filePath);
        serveFile(fullPath, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(page404);
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
