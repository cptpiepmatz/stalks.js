"use strict";

class ProfileError extends Error {
  constructor(message, expectedProfile) {
    super(message);

    /**
     * Id or username of expected profile.
     * @type {number|string}
     */
    this.expectedProfile = expectedProfile;
  }
}

export default ProfileError;
export { ProfileError };