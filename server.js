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

//************ */
//Tip Calculator
//************ */

// Your app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.

// When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20' should display 20 on the page).

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = req.params.total;
  const tipPercentage = req.params.tipPercentage;

  const tip = total * (tipPercentage / 100);
  res.send(`Tip amount: ${tip}`);
});

app.listen(3000, () => {
  console.log("Server is running");
});
