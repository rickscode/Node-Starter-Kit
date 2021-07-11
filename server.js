
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
    console.log(req);
    res.send("Yay Daisy you served a new response!");
});
// listen for requests and execute callback 
app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });