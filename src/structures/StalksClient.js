"use strict";

import Stalks from "./stalks/Stalks.js";
import Accounts from "./accounts/Accounts.js";

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

    /**
     * Access to the Accounts part of the API.
     * @type {Accounts}
     */
    this.accounts = new Accounts(token);
  }
}

export default StalksClient;
export { StalksClient };