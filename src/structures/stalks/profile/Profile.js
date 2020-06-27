"use strict";

import Week from "../weeks/Week.js";

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
     * 
     */
    this.username = profileData.username;
    this.villagerName = profileData.villager_name;
    this.townName = profileData.townName;
    this.patronLevel = profileData.patron_level;
    this.weeks = [];
    for (let weekData of profileData.weeks) {
      this.weeks.push(new Week(weekData));
    }
  }
}

export default Profile;