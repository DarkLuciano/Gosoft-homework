var http = require('http')
http
.createServer(function (req, res) {
res.writeHead(200, { 'Content-Type': 'text/plain' })
let date= new Date().toLocaleString();
res.end('Rywin Tanasirijiranont \n'+date)
})
.listen(2337, '127.0.0.1')
console.log('Server running at http://127.0.0.1:2337/')
