"use strict";

// setup to use fetch globally
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
global.fetch = require("node-fetch");

import StalksClient from "./structures/StalksClient.js";

const client = new StalksClient("1ca59cc70754fd5aefbf1bfa8361d4e3f08e11b8");
const accounts = client.accounts;
accounts.fetchPassport().then(console.log);
