"use strict";

import { StalksClient } from "stalks.js"
import dotenv from "dotenv";
dotenv.config();

const client = new StalksClient(process.env.STALKS_TOKEN);
const stalks = client.stalks;
const accounts = client.accounts;

// simple week update
(async function () {
  try {
    let week = await stalks.fetchWeek();
    console.log(week);
    week.prices[0] = 60;
    let newWeek = await stalks.updateWeek(week);
    console.log(newWeek);
    await stalks.updateWeek(week, true);
  }
  catch (e) {
    console.error(e);
  }
})();

// fetch a user profile
(async function () {
  try {
    let userProfile = await stalks.fetchUserProfile("tomnook");
    console.log(userProfile);
  }
  catch (e) {
    console.error(e);
  }
})();

// add and remove a friend
(async function () {
  try {
    let currentFriends = await accounts.fetchFriends();
    console.log(currentFriends);
    await accounts.addFriend("tomnook");
    let newFriends = await accounts.fetchFriends();
    console.log(newFriends);
    await accounts.removeFriend("tomnook");
  }
  catch (e) {
    console.error(e);
  }
})();
