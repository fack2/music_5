const http = require("http");
const PORT = process.env.PORT || 4001;
const LOCALHOST = process.env.LOCALHOST || "localhost";
const router = require("./router");

http.createServer(router).listen(PORT, LOCALHOST, () => {
	console.log(`Server running on http://${LOCALHOST}:${PORT}`);
});
