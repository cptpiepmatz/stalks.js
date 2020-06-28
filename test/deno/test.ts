"use strict";

import StalksClient from "../../mod.ts";

const client = new StalksClient("1ca59cc70754fd5aefbf1bfa8361d4e3f08e11b8");
const accounts = client.accounts;
accounts.fetchPassport().then(console.log);
