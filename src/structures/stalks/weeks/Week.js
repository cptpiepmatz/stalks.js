"use strict";

const Buy = require("./Buy");
const Sell = require("./Sell");
const Advice = require("./Advice");

class Week {
  /**
   * @param {WeekData} weekData - The data for the week.
   */
  constructor(weekData) {
    /**
     * The id of the week.
     * @type {number}
     */
    this.id = weekData.id;

    /**
     * The sunday that the week started on.
     * @type {Date}
     */
    this.date = new Date(weekData.date);

    let buys = [];
    for (let buyData of weekData.buys) {
      buys.push(new Buy({
        local: buyData.local,
        label: buyData.label,
        price: buyData.price,
        quantity: buyData.quantity
      }));
    }
    /**
     * The list of buys were made.
     * @type {Buy[]}
     */
    this.buys = buys;

    /**
     * Whether or not this is the first
     * that turnips have been bought from your island.
     * @type {boolean}
     */
    this.buyLocalFirstTime = weekData.buy_local_first_time;

    let sells = [];
    for (let sellData of weekData.sells) {
      sells.push(new Sell({
        price: sellData.price,
        quantity: sellData.quantity,
        slots: sellData.slots
      }));
    }
    /**
     * Just like buys, this is a list because you can track multiple sales.
     * @type {Sell[]}
     */
    this.sells = sells;

    /**
     * The price Daisy Mae was selling turnips for on your specific island,
     * regardless of where you purchased from.
     * @type {number}
     */
    this.local_price = weekData.local_price;

    /**
     * A list of prices for each slot.
     * null values can be used for missing prices.
     * @type {number[]}
     */
    this.prices = weekData.prices;

    /**
     * The pattern you had last week.
     * @type {string}
     * @readonly
     */
    this.manual_previous_pattern = weekData.manual_previous_pattern;

    /**
     * Allows you to explicitly state what your pattern was last week. <br>
     * Should be one of "big_spike", "small_spike", "triple", or "decreasing".
     * @type {string}
     */
    this.previous_pattern = weekData.previous_pattern;

    /**
     * Your calculated profit for the week.
     * @type {number}
     * @readonly
     */
    this.profit = weekData.profit;

    /**
     * Contains all of your predictions and suggestions for the week,
     * based on what you've entered.
     * @type {Advice}
     * @readonly
     */
    this.advice = new Advice({
      sell: weekData.advice.sell,
      advice: weekData.advice.advice,
      prediction: weekData.advice.prediction,
      odds: weekData.advice.odds
    })

    /**
     * A list of all your friends that have entered data for the corresponding week.
     * @type {FriendWeekData[]}
     */
    this.friend_weeks = weekData.friend_weeks;

    /**
     * A sanity check that prevents an outdated frontend from overwriting newer data
     * on the server.
     * @type {number}
     */
    this.version = weekData.version;
  }

  /**
   * Returns the sunday of the week.
   * @param {DateResolvable} date
   * @returns {Date}
   */
  static getDateSunday(date) {
    let sundayDate = new Date(date);
    sundayDate.setDate(sundayDate.getDate() - sundayDate.getDay());
    return sundayDate;
  }
}

module.exports = Week;