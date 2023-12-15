const express = require("express");
const app = express();

//************** */
//Greetings
//************** */

// Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".

app.get("/greetings", (req, res) => {
  res.send("Hello, stranger");
});
// Give the greeting route a param /:name

// When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy' should display Wow! Hello there, Jimmy-boy on the page).

app.get("/greetings/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}`);
});

app.listen(3000, () => {
  console.log("Server is running");
});
