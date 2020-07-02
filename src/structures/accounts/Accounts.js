"use strict";

import StalksHTTPError from "../StalksHTTPError.js";
import Profile from "./profile/Profile.js";
import ProfileError from "./profile/ProfileError.js";
import Passport from "./passport/Passport.js";
import isDefined from "../../util/isDefined.js";

class Accounts {
  /**
   * The part of the API that interacts with the accounts.
   * @param {string} token - The authorization token.
   */
  constructor(token) {
    this._endpoint = "https://stalks.io/api/accounts/"
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
   * Get endpoint to fetch friends.
   * @returns {object}
   * @private
   */
  getFriendsEndpoint() {
    return this._endpoint + "friends/";
  }

  /**
   * Fetches friend profiles.
   * @returns {Promise<Profile[]>}
   * @throws {StalksHTTPError}
   */
  async fetchFriends() {
    let header = this.getAuthHeader();

    let res = await fetch(this.getFriendsEndpoint(), {
      method: "GET",
      headers: header
    });
    if (!res.ok) {
      throw new StalksHTTPError(
        res.status,
        "GET",
        this.getFriendsEndpoint(),
        res
      );
    }
    let json = await res.json();
    let friends = [];
    for (let jsonElement of json) {
      friends.push(new Profile(jsonElement));
    }
    return friends;
  }

  /**
   * Add a user as your friend.
   * @param {ProfileResolvable} profile
   * @returns {Promise<Profile>}
   * @throws {StalksHTTPError}
   * @throws {ProfileError}
   */
  async addFriend(profile) {
    let username = profile;
    if (profile instanceof Profile) {
      username = profile.username;
    }

    let body = JSON.stringify({username: username});
    let header = Object.assign(this.getAuthHeader(), { "Content-Type": "application/json"});

    let res = await fetch(this.getFriendsEndpoint(), {
      method: "POST",
      headers: header,
      body: body
    });
    if (res.status === 400) {
      throw new ProfileError("Profile does not exist", username);
    }
    if (!res.ok) {
      throw new StalksHTTPError(
        res.status,
        "POST",
        this.getFriendsEndpoint(),
        res
      );
    }
    let json = await res.json();
    return new Profile(json);
  }

  /**
   * Removes a user from your friend list.
   * @param {number|ProfileResolvable} profile
   * @returns {Promise}
   * @throws {StalksHTTPError}
   * @throws {ProfileError}
   */
  async removeFriend(profile) {
    let id = profile;
    if (profile instanceof Profile) {
      id = profile.id;
    }
    if (isNaN(parseInt(id))) {
      id = (await this.addFriend(profile)).id;
    }

    let url = this.getFriendsEndpoint() + id + "/";
    let header = this.getAuthHeader();

    let res = await fetch(url, {
      method: "DELETE",
      headers: header
    });
    if (res.status === 400) {
      throw new ProfileError("Profile does not exist", id);
    }
    if (!res.ok) {
      throw new StalksHTTPError(
        res.status,
        "DELETE",
        url,
        res
      );
    }
  }

  /**
   * Fetches the profile of the current user.
   * @returns {Promise<Profile>}
   * @throws {StalksHTTPError}
   */
  async fetchCurrentUser() {
    let endpoint = this._endpoint + "current_user/";
    let header = this.getAuthHeader();

    let res = await fetch(endpoint, {
      method: "GET",
      headers: header
    });

    if (!res.ok) {
      throw new StalksHTTPError(
        res.status,
        "GET",
        endpoint,
        res
      );
    }
    let json = await res.json();
    return new Profile(json);
  }

  /**
   * Updates your passport.
   * @param {PassportResolvable} passport
   * @returns {Promise<Passport>}
   * @throws {StalksHTTPError}
   */
  async updatePassport(passport) {
    if (!isDefined(passport.username)) {
      passport.username = (await this.fetchCurrentUser()).username;
    }
    let body = JSON.stringify(passport);
    let header = Object.assign(this.getAuthHeader(), { "Content-Type": "application/json"});
    let endpoint = this._endpoint + "update_passport/";

    let res = await fetch(endpoint, {
      method: "POST",
      headers: header,
      body: body
    });
    if (!res.ok) {
      throw new StalksHTTPError(
        res.status,
        "POST",
        endpoint,
        res
      );
    }

    let json = await res.json();
    return new Passport(json);
  }

  /**
   * Fetches the current passport.
   * @returns {Promise<Passport>}
   * @throws {StalksHTTPError}
   */
  async fetchPassport() {
    return this.updatePassport({});
  }
}

export default Accounts;
export { Accounts };