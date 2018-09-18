/////////////

const http = require('http');

http.createServer((request, result) => {
        result.write('Hola mundo');
        result.end();
    })
    .listen(8080);

console.log('escuchando en puerto 8080');