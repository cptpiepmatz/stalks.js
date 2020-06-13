"use strict";

const Stalks = require("./structures/stalks/weeks/Stalks");

let stalks = new Stalks("1ca59cc70754fd5aefbf1bfa8361d4e3f08e11b8");
stalks.fetchWeek()
  .then(res => console.log(res));

module.exports = {
};