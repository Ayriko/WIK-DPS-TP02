import http, { IncomingMessage, ServerResponse } from "http";

const port =  process.env.PING_LISTEN_PORT ? process.env.PING_LISTEN_PORT : 3000;

http.createServer(function (req: IncomingMessage, res: ServerResponse) {
    if (req.method === 'GET' && req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(req.headers));
    } else {
        res.writeHead(404, { "Content-Type": 'application/json' });
    }
    res.end();
}).listen(port, function () {
    console.log(`server start at port: ${port}`);
});