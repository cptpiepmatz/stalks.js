"use strict";

import StalksClient from "./structures/StalksClient.js";

// accounts
import Passport from "./structures/accounts/passport/Passport.js";
import Profile from "./structures/accounts/profile/Profile.js";
import Accounts from "./structures/accounts/Accounts.js";

// stalks
import Advice from "./structures/stalks/weeks/Advice.js";
import Buy from "./structures/stalks/weeks/Buy.js";
import FriendWeek from "./structures/stalks/weeks/FriendWeek.js";
import Prediction from "./structures/stalks/weeks/Prediction.js";
import Sell from "./structures/stalks/weeks/Sell.js";
import Week from "./structures/stalks/weeks/Week.js";
import WeekVersionError from "./structures/stalks/weeks/WeekVersionError.js";
import Stalks from "./structures/stalks/Stalks.js";

// error
import StalksHTTPError from "./structures/StalksHTTPError.js";

export default StalksClient;
export {
  StalksClient ,

  Passport,
  Profile,
  Accounts,

  Advice,
  Buy,
  FriendWeek,
  Prediction,
  Sell,
  Week,
  WeekVersionError,
  Stalks,

  StalksHTTPError
};