"use strict";

class WeekVersionError extends Error {
  /**
   * The error you get if you want to update an outdated week.
   * @param {Week} week
   * @param {StalksHTTPError} stalksHTTPError
   * @param {Stalks} stalks
   */
  constructor(week, stalksHTTPError, stalks) {
    super("Server has newer version of week");

    /**
     * The outdated week.
     * @type {Week}
     */
    this.week = week;

    /**
     * The error you got exactly.
     * @type {StalksHTTPError}
     */
    this.stalksHTTPError = stalksHTTPError;

    /**
     * The stalks object that tried to update the week.
     * @type {Stalks}
     */
    this.stalks = stalks;
  }

  /**
   * Forces the update of the outdated week.
   * @returns {Promise<Week>}
   * @throws {StalksHTTPError}
   */
  async forceWeek() {
    let week = this.week;
    week.version = undefined;
    return await this.stalks.updateWeek(week, true);
  }
}

export default WeekVersionError;
export { WeekVersionError };