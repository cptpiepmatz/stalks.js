"use strict";

import Advice from "./Advice.js";

class FriendWeek {
  /**
   * @param {FriendWeekData} friendWeekData - Week data of a friend.
   */
  constructor(friendWeekData) {
    /**
     * The id of the friend.
     * @type {number}
     */
    this.id = friendWeekData.id;

    /**
     * The username of the friend.
     * @type {string}
     */
    this.username = friendWeekData.username;

    /**
     * A list of prices for each slot.
     * null values can be used for missing prices.
     * @type {number[]}
     */
    this.prices = friendWeekData.prices;

    /**
     * Contains all of your predictions and suggestions for the week,
     * based on what you've entered.
     * @type {Advice}
     * @readonly
     */
    this.advice = new Advice({
      sell: friendWeekData.advice.sell,
      advice: friendWeekData.advice.advice,
      prediction: friendWeekData.advice.prediction,
      odds: friendWeekData.advice.odds
    })
  }
}

export default FriendWeek;