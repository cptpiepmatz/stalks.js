"use strict";

// setup to use fetch globally
import fetch from "node-fetch";
global.fetch = fetch;

export * from "./index.js";