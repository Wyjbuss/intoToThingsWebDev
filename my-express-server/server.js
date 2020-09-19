const express = require("express");

const app = express();

app.get("/", function(request, response) {
	response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
	res.send("Contact at: wyjbuss@gmail.com");
});

app.get("/about", function(req, res) {
	res.send("this server was set up by Wyatt Bussell at my house")
});

app.listen(3000, function() {
	console.log('Server started on port 3000');
});
