const http = require("http");
const PORT = process.env.PORT || 4000;
const LOCALHOST = process.env.LOCALHOST || "localhost";

http.createServer().listen(port, locahost, () => {
	console.log(`Server running on http://${LOCALHOST}:${PORT}`);
});
