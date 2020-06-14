"use strict";

const Stalks = require("./stalks/Stalks");

class StalksClient {
  /**
   * The client to interact with the API.
   * @param {string} token - Your auth token.
   */
  constructor(token) {
    /**
     * @type string
     * @private
     */
    this._token = token;

    /**
     * Access to the Stalks part of the API.
     * @type {Stalks}
     */
    this.stalks = new Stalks(token);
  }
}

module.exports = StalksClient;