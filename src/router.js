const router = (request, response) => {
	if (request.url === "/") {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end("<h1>hello</h1>");
	} else if (request.url === "/search") {
		const arr = [1, 2, 3];
		response.writeHead(200, { "Content-Type": "application/json" });
		response.end(JSON.stringify(arr));
	} else {
		response.writeHead(404, { "Content-Type": "text/html" });
		response.end("<h1>Sorry, page not found</h1>");
	}
};

module.exports = router;
