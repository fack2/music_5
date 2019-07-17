const { homeHandler, publicHandler, searchHandler } = require("./handler");

const router = (request, response) => {
	if (request.url === "/") {
		response.writeHead(200, { "Content-Type": "text/html" });
		homeHandler(request, response);
	} else if (request.url.includes("/search")) {
		searchHandler(request, response, request.url);
	} else if (request.url.includes("public")) {
		publicHandler(request, response, request.url);
	} else {
		response.writeHead(404, { "Content-Type": "text/html" });
		response.end("<h1>Sorry, page not found</h1>");
	}
};

module.exports = router;
