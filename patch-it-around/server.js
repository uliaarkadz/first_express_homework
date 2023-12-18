const express = require("express");
const app = express();

//******************** *
//Take one Down and Pass it Around
//******************** */
let numberOfBugs = 99;
let randomNumberOfBugs = Math.floor(Math.random() * 120);

app.get("/", (req, res) => {
  res.send(
    `<h1>${numberOfBugs} little bugs in the code</h1><a href ='/${numberOfBugs}'> take one down, Patch it around</a>`
  );
});

app.get("/:number_of_bugs", (req, res) => {
  let number = req.params.number_of_bugs;
  if (number > 0) {
    res.send(
      `<h2>${randomNumberOfBugs--} Bugs in the code</h2><a href ='/${randomNumberOfBugs}'> take one down, Patch it around</a>`
    );
  } else {
    res.send(`<h1>No more bugs left!!</h1><a href ='/'> Start Over</a>`);
    numberOfBugs = 0;
  }
});

//*********************** */
app.listen(3000, () => {
  console.log("Server is running");
});
