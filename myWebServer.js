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

// //--express static

// const express = require("express");
// const serverApp = express();
// serverApp.use("/", express.static("static"));
// serverApp.listen(PORT, function (err) {
//   if (err) {
//     console.log(err);
//   }

//   console.log(`My express listening at http://localhost:${PORT}`);

// });

//week 3 MySQL practice
//###--db connection
//--question 1

const express = require("express");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "myDB",
  password: "myDB",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// question 2 create five tables

const serverApp = express();
// serverApp.get("/install", function (req, res) {
//   //create product table
//   let Products = `CREATE TABLE if not exists Products(
//       product_id int auto_increment,
//       product_url varchar(255) not null,
//       product_name varchar(255) not null,
//       PRIMARY KEY (product_id)
//   )`;
//   con.query(Products, (err, results) => {
//     if (err) console.log(err);
//     console.log("<h1>created product table<h1/>");
//   });

//   // create ProductDescription table
//   let ProductDescription = `CREATE TABLE if not exists ProductDescription(
//     description_id int auto_increment,
//     product_id int(11) not null,
//     product_brief_description TEXT not null,
//     product_description TEXT not null,
//     product_img varchar(255) not null,
//     product_link varchar(255) not null,
//     PRIMARY KEY (description_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id)
//   )`;

//   con.query(ProductDescription, (err, results) => {
//     if (err) console.log(err);
//     console.log("<h1>created ProductDescription table<h1/>");
//   });

//   // create table ProductPrice
//   let ProductPrice = `CREATE TABLE if not exists ProductPrice(
//     price_id int auto_increment,
//     product_id int(11) not null,
//     starting_price varchar(255) not null,
//     price_range varchar(255) not null,
//     PRIMARY KEY (price_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id)
//   )`;
//   con.query(ProductPrice, (err, results) => {
//     if (err) console.log(err);
//     console.log("<h1> created ProductPrice table<h1/>");
//   });

//   // create table user
//   let user = `CREATE TABLE if not exists User(
//     user_id int auto_increment,
//     user_name varchar(255) not null,
//     user_password varchar(255) not null,
//     PRIMARY KEY (user_id)
//   )`;
//   con.query(user, (err, results) => {
//     if (err) console.log(err);
//     console.log("<h1>created user table<h1/>");
//   });

//   //create order table

//   let order = `CREATE TABLE if not exists Orders(
//     order_id int auto_increment,
//     product_id int(11) not null,
//     user_id int(11) not null,
//     PRIMARY KEY (order_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id),
//     FOREIGN KEY (user_id) REFERENCES User(user_id)
//   )`;
//   con.query(order, (err, results) => {
//     if (err) console.log(err);
//     res.send("<h1>created table<h1/>");
//   });
// });

serverApp.use("/form", express.static("display"));

serverApp.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`My express server listening at http://localhost:${PORT}`);
});
