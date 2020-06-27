"use strict";

import Week from "./weeks/Week.js";
import StalksHTTPError from "../StalksHTTPError.js";

class Stalks {
  /**
   * The part of the API that interacts with the weeks.
   * @param {string} token - The authorization token.
   */
  constructor(token) {
    this._endpoint = "https://stalks.io/api/stalks/"
    this._token = token;
  }

  /**
   * Get the header for fetch request.
   * @returns {{Authorization: string}} Header for the fetch.
   * @private
   */
  getAuthHeader() {
    let token = this._token;
    return { Authorization: "Token " + token};
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
    return this._endpoint + "weeks/";
  }

  /**
   * Fetches the current or a specific Week.
   * @param {DateResolvable} [date=new Date()] - A date in the week.
   * @param {boolean} [createNew=false] - Create a new one if it does not exist.
   * @returns {Promise<Week>}
   * @throws {StalksHTTPError}
   */
  async fetchWeek(date, createNew = false) {
    if (typeof date === "undefined") date = new Date();
    let sundayDate = Week.getDateSunday(date);
    let url = this.getWeeksEndpoint()
      + "by_date/?date="
      + sundayDate.toISOString().substr(0, 10);
    let authHeader = this.getAuthHeader();
    let res = await fetch(url, {
      method: "GET",
      headers: authHeader
    });
    if (res.status === 404 && createNew) {
      return this.createWeek(sundayDate);
    }
    if (!res.ok) {
      throw new StalksHTTPError(res.status, "GET", url);
    }
    let json = await res.json();
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
    });
  }

  /**
   * Creates a Week for this week or a specific one.
   * @param {DateResolvable} [date=new Date()] - A date in the week.
   * @returns {Promise<Week>}
   * @throws {StalksHTTPError}
   */
  async createWeek(date) {
    if (typeof date === "undefined") date = new Date();
    let sundayDate = Week.getDateSunday(date);
    let week = new Week({
      date: sundayDate,
      buys: [],
      buy_local_first_time: null,
      local_price: null,
      prices: [],
      sells: []
    });
    let header = Object.assign(this.getAuthHeader(), { "Content-Type": "application/json"});
    let res = await fetch(this.getWeeksEndpoint(), {
      method: "POST",
      headers: header,
      body: JSON.stringify(week)
    });
    if (!res.ok) {
      throw new StalksHTTPError(res.status, "POST", this.getWeeksEndpoint());
    }
    return await res.json();
  }

  /**
   * Updates a given week.
   * @param {Week} week - Week to update current week with.
   * @returns {Promise<Week>}
   * @throws {StalksHTTPError}
   */
  async updateWeek(week) {
    let header = Object.assign(this.getAuthHeader(), { "Content-Type": "application/json"});
    let res = fetch(this.getWeeksEndpoint() + week.id, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(week)
    });
    if (!res.ok) {
      throw new StalksHTTPError(res.status, "PUT", this.getWeeksEndpoint() + week.id);
    }
    return await res.json();
  }

  /**
   * Resets the prices of the current or a specific week.
   * @param {Week|DateResolvable} [weekOrDate=new Date()] - A date in the week or the Week itself.
   * @param {boolean} [createNew=false] - Create a new one if it does not exist. (Only works with Date)
   * @returns {Promise<Week>}
   * @throws {StalksHTTPError}
   */
  async resetWeekPrices(weekOrDate, createNew = false) {
    if (!(weekOrDate instanceof Week)) {
      weekOrDate = await this.fetchWeek(weekOrDate, true);
    }
    // at this point weekOrDate is a Week
    weekOrDate.prices = [];
    return this.updateWeek(weekOrDate);
  }
}

export default Stalks;