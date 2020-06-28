"use strict";

import StalksClient from "./structures/StalksClient.js";

const client = new StalksClient("1ca59cc70754fd5aefbf1bfa8361d4e3f08e11b8");
const stalks = client.stalks;
stalks.resetWeekPrices()
  .then(res => console.log(res));

export default StalksClient;
