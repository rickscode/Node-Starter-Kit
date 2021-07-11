// import express in to file
const express = require('express');
// initialise express server app
const app = express();
// listen for requests and execute callback 
app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });