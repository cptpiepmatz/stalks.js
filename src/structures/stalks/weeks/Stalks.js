"use strict";

const fetch = require("node-fetch");

const Week = require("./Week");

class Stalks {
  /**
   * @param {string} token - The authorization token.
   */
  constructor(token) {
    this._endpoint = "https://stalks.io/api"
    this._token = token;
  }

  /**
   * Get the header for fetch request.
   * @returns {{Authorization: string}} Header for the fetch.
   * @private
   */
  getFetchHeader() {
    let token = this._token;
    return { "Authorization": "Token " + token};
  }

  /**
   * Get Stalks endpoint.
   * @returns {string} endpointString
   * @private
   */
  getEndpoint() {
    return this._endpoint;
  }

  /**
   * Get endpoint to work with Weeks.
   * @returns {string} endpointString
   * @private
   */
  getWeeksEndpoint() {
    return this._endpoint + "/stalks/weeks/";
  }

  /**
   * Fetches the current or a specific Week.
   * @param {Date} [date] - A date in the week.
   * @returns {Promise<Week>}
   */
  fetchWeek(date) {
    if (typeof date === "undefined") date = new Date();
    let sundayDate = Week.getDateSunday(date);
    let url = this.getWeeksEndpoint()
      + "by_date/?date="
      + sundayDate.toISOString().substr(0, 10);
    return fetch(url, {
      method: "get",
      headers: this.getFetchHeader()
    }).then(res => res.json())
      .then(json => {
        return new Week({
          id: json.id,
          date: json.date,
          buys: json.buys,
          buy_local_first_time: json.buy_local_first_time,
          sells: json.sells,
          local_price: json.local_price,
          prices: json.prices,
          manual_previous_pattern: json.manual_previous_pattern,
          previous_pattern: json.previous_pattern,
          profit: json.profit,
          advice: json.advice,
          friend_weeks: json.friend_weeks,
          version: json.version
        })
      })
  }
}

module.exports = Stalks;