const express = require("express");
const app = express();

//******************** *
//Take one Down and Pass it Around
//******************** */
let numberOfBottles = 99;

app.get("/", (req, res) => {
  res.send(
    `<h1>${numberOfBottles} Bottles of beer on the wall</h1><a href ='/${
      numberOfBottles - 1
    }'> take one down, pass it around</a>`
  );
});

app.get("/:number_of_bottles", (req, res) => {
  let number = req.params.number_of_bottles;
  if (number > 0) {
    res.send(
      `<h2>${number--} Bottles of beer on the wall</h2><a href ='/${number}'> take one down, pass it around</a>`
    );
  } else {
    res.send(`<h1>No more beer left!!</h1><a href ='/'> Start Over</a>`);
    numberOfBottles = 99;
  }
});

//*********************** */
app.listen(3000, () => {
  console.log("Server is running");
});
