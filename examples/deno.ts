"use strict";

import StalksClient from "https://raw.githubusercontent.com/cptpiepmatz/stalks.js/master/mod.ts"
import { config } from "https://deno.land/x/dotenv/mod.ts";

let env = config();

const client = new StalksClient(env.STALKS_TOKEN);
const stalks = client.stalks;
const accounts = client.accounts;

// simple week update
(async function (): Promise<any> {
    try {
        let week = await stalks.fetchWeek();
        console.log(week);
        week.prices[0] = 60;
        let newWeek = await stalks.updateWeek(week);
        console.log(newWeek);
        await stalks.updateWeek(week, true);
    }
    catch (e) {
        console.error(e);
    }
})();

// fetch a user profile
/** @ignore */
(async function (): Promise<any> {
    try {
        let userProfile = await stalks.fetchUserProfile("tomnook");
        console.log(userProfile);
    }
    catch (e) {
        console.error(e);
    }
})();

// add and remove a friend
(async function (): Promise<any> {
    try {
        let currentFriends = await accounts.fetchFriends();
        console.log(currentFriends);
        await accounts.addFriend("tomnook");
        let newFriends = await accounts.fetchFriends();
        console.log(newFriends);
        await accounts.removeFriend("tomnook");
    }
    catch (e) {
        console.error(e);
    }
})();
