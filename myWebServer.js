// const http = require("http");
// // var r = require("./randomNumber");
const PORT = 1234;
// const createServer = http.createServer(function (req, res) {
//   res.end("Request received and processed");
//   // res.end("" + r.random());
// });

// createServer.listen(PORT, function (err) {
//   console.log(`Server running http://localhost:${PORT}`);
// });

//---------
// var http = require("http");
// var fs = require("fs");
// var url = require("url");
// var Server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true);

//   var location = "./static/about.html";
//   console.log(location);

//   fs.readFile(location, function (err, data) {
//     res.writeHead(200, { "content-type": "html / text" });
//     res.end(data);
//   });
// });
// Server.listen(1234, function () {
//   console.log("Server listening at port 1234");
// });

///-----
// var http = require("http");
// var fs = require("fs");
// var url = require("url");
// var mimeTypes = require("mime-types");
// var mimeTypeLookUp = mimeTypes.lookup;
// var myServer = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true);
//   var parsedURLsPath = parsedUrl.pathname;
//   if (parsedURLsPath == "/") {
//     parsedURLsPath = "/about.html";
//   }
//   var setMimeOfFileToServe = mimeTypeLookUp(parsedURLsPath);
//   var locationOfFileToServe = __dirname + "/static/" + parsedURLsPath;
//   fs.readFile(locationOfFileToServe, function (err, data) {
//     res.writeHead(200, { "content-type": setMimeOfFileToServe });
//     res.end(data);
//   });
// });
// myServer.listen(1234, function () {
//   console.log("Server listening at port 1234");
// });

//---express
// const express = require("express");
// const serverApp = express();
// serverApp.get("/", function (req, res) {
//   res.send("<h1>Request processed with Express</>");
// });
// serverApp.listen(1234, function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(`My express server listening at http://localhost:${PORT}`);
// });

//--express static

const express = require("express");
const serverApp = express();
serverApp.use("/", express.static("static"));
serverApp.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  }
 
  console.log(`My express listening at http://localhost:${PORT}`);

});