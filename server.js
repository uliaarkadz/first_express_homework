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

//************** */
//Magic 8 Ball
//************** */

const magicBallResponse = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// Create a route of '/magic' that should expect a phrase in the URL that ask the Magic 8 ball a question.

// So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.
// We can't use spaces in the url, so we use %20 to express a space in the url.
// So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.
// Send the magic 8 ball response back between html <h1> tags
// Use this array of Magic 8 ball responses.....

let number = Math.floor(Math.random() * magicBallResponse.length);

app.get("/magic", (req, res) => {
  const phrase = req.query.phrase;
  //   const response = {phrase, magicBallResponse[numeber]}
  res.send(
    `<h1>${phrase}?</h1> <h2 >Magic Ball says: <span style="color:red">${magicBallResponse[number]}</span></h2>`
  );
});

//**************** */
//Hungry for more?
//*************** */

//*************** */
// Fibonacci
//*************** */
// Add Fibonnaci as a comment in your application.
// Create a route 'fibonacci'
// This route will take one param, the number we will operate on.
// If the number param is not a fibonacci number, print out "I can tell this is not a fibonacci number."
// If the number is a Fibonacci number print out "Very good. It is Fibonacci."

app.get("/fibonacci/:number", (req, res) => {
  const number = req.params.number;
  if (isFibonacci(number)) {
    res.send("<h1>Very good. It is Fibonacci.</h1>");
  } else {
    res.send("<h1>I can tell this is not a fibonacci number.</h1>");
  }
});

//function to check if number is persfect squre
function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s == x;
}

//function to check if number is fibonacci
function isFibonacci(number) {
  return (
    isPerfectSquare(5 * number * number + 4) ||
    isPerfectSquare(5 * number * number - 4)
  );
}

//*********************** */
app.listen(3000, () => {
  console.log("Server is running");
});
