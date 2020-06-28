"use strict";

import Week from "../../stalks/weeks/Week.js";
import isDefined from "../../../util/isDefined.js";

class Profile {
  /**
   * Represents a user profile.
   * @param {ProfileData} profileData - The data for the week.
   */
  constructor(profileData) {
    /**
     * The profile id of a user.
     * @type {number}
     */
    this.id = profileData.id;

    /**
     * The username of a user.
     * @type {string}
     */
    this.username = profileData.username;

    /**
     * The villager name the user entered in his passport.
     * @type {?string}
     */
    this.villagerName = profileData.villager_name;

    /**
     * The town/island name the user entered in his passport.
     * @type {?string}
     */
    this.townName = profileData.town_name;

    /**
     * The patron level a user has.
     * @type {?number}
     */
    this.patronLevel = profileData.patron_level;

    if (isDefined(profileData.weeks)) {
      /**
       * The weeks of a user.
       * (not available via Accounts.fetchFriends)
       * @type {Week[]}
       */
      this.weeks = [];
      for (let weekData of profileData.weeks) {
        this.weeks.push(new Week(weekData));
      }
    }
  }
}

export default Profile;