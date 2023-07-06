const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    fs.readFile("Home.html", "utf-8", (err, data) => {
      if (err) console.log("Please create the file first before read it");
      res.end(data);
    });
  } else if (req.url == "/signup") {
    fs.readFile("Signup.html", "utf-8", (err, data) => {
      if (err) console.log("Please create the file first before read it");
      res.end(data);
    });
  } else if (req.url == "/login") {
    fs.readFile("Login.html", "utf-8", (err, data) => {
      if (err) console.log("Please create the file first before read it");
      res.end(data);
    });
  } else if (req.url == "/product") {
    fs.readFile("Product.html", "utf-8", (err, data) => {
      if (err) console.log("Please create the file first before read it");
      res.end(data);
    });
  } else {
    res.end("Page not found");
  }
});

server.listen(8020, () => {
  console.log("Listening the user");
});
