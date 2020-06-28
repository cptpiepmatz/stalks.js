"use strict";

// setup to use fetch globally
import fetch from "node-fetch";
global.fetch = fetch;

import StalksClient from "./structures/StalksClient.js";

export default StalksClient;