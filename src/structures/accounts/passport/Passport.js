"use strict";

import isDefined from "../../../util/isDefined.js";

class Passport {
  /**
   * Represents a passport.
   * (All options are optional.)
   * @param {PassportData} [passportData]
   */
  constructor(passportData = {}) {
    if (isDefined(passportData.username)) {
      /**
       * The username of a user.
       * @type {string}
       */
      this.username = passportData.username;
    }

    if (isDefined(passportData.villager_name)) {
      /**
       * The villager name of a user.
       * @type {string}
       */
      this.villagerName = passportData.villager_name;
    }

    if (isDefined(passportData.town_name)) {
      /**
       * The town/island name of a user.
       * @type {string}
       */
      this.townName = passportData.town_name;
    }

    if (isDefined(passportData.friend_code)) {
      /**
       * The friend code of a user.
       * Format: SW-1234-5678-0910
       * @type {string}
       */
      this.friendCode = passportData.friend_code;
    }

    if (isDefined(passportData.bought_local)) {
      /**
       * Whether your island has ever had turnips bought from it.
       * @type {boolean}
       */
      this.boughtLocal = passportData.bought_local;
    }

    if (isDefined(passportData.patron_lowkey)) {
      /**
       * Whether to hide you from the patrons page.
       * @type {?boolean}
       */
      this.patronLowkey = passportData.patron_lowkey;
    }
  }

  /**
   * Serializes the Week to a JSON.
   * @returns {PassportData}
   */
  toJSON() {
    let json = {};

    if (isDefined(this.username)) {
      json.username = this.username;
    }

    if (isDefined(this.villagerName)) {
      json.villager_name = this.villagerName;
    }

    if (isDefined(this.townName)) {
      json.town_name = this.townName;
    }

    if (isDefined(this.friendCode)) {
      json.friend_code = this.friendCode;
    }

    if (isDefined(this.boughtLocal)) {
      json.bought_local = this.boughtLocal;
    }

    if (isDefined(this.patronLowkey)) {
      json.patron_lowkey = this.patronLowkey;
    }

    return json;
  }
}

export default Passport;