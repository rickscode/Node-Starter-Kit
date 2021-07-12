
// import express in to file
const express = require('express');
// initialise express server app
const app = express();
// Handler function to send message back to client with send() method
app.get("/", (req, res) => {
    console.log(req);
    res.send("Yay Daisy!");
});
// Routing example with new end point
app.get("/Daisy", (req, res) => {
    res.send("Yay Daisy you served a new response!");
});
// Another Routing example with new end point to serve HTML Kali image
app.get("/kali", (req, res) => {
    res.sendFile(__dirname + '/kali.html');

});
// Detect query parameters
app.get("/", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
  });
// listen for requests and execute callback 
app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });