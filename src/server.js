const http = require("http");
const PORT = process.env.PORT || 4001;
const router = require("./router");

const server = http.createServer(router);
server.listen(PORT);

console.log(`localhost: ${PORT}`);