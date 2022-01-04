<div align="center">
  <img src="images/logo.svg" width="256"/>
  <br>
  <p>A library/module to interact with the <a href="https://stalks.io/">stalks.io</a> API.</p>
  <a href="https://www.npmjs.com/package/stalks.js">
    <img alt="npm" src="https://img.shields.io/npm/v/stalks.js?style=for-the-badge&logo=npm">
  </a>
  <a href="https://www.github.com/derPiepmat/stalks.js">
    <img alt="GitHub" src="https://img.shields.io/github/license/cptpiepmatz/stalks.js?style=for-the-badge">
  </a>
  <a href="https://www.github.com/derPiepmat/stalks.js">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/cptpiepmatz/stalks.js/Node.js Package?style=for-the-badge&logo=github">
  </a>
</div>

---

## What's this?

If you play animal crossing, especially the new horizons you may have the seen the character [Daisy Mae](https://animalcrossing.fandom.com/wiki/Daisy_Mae). She sells you turnips which you can later sell. To improve your results you may want to track the prices. That caused the website [stalks.io](https://stalks.io). It allows you to track the prices and show you a predicition.

If you happen to be patron of this at level 2 you can use the api to interact with the page. This library/module allows you to easily interact with the api via [node](https://nodejs.org/) or [deno](https://deno.land).


## Documentaion

You find a full documentation over [here](https://cptpiepmatz.github.io/stalks.js).


## Installation

If you want to use node you just need to install it via:
```sh
$ npm install stalks.js
```


## Loading the library/modules

For node:
```js
import StalksClient from "stalks.js";
```
You can't use require. stalks.js is a pure ES Module. You still can use the dynamic [import()](https://nodejs.org/api/esm.html#esm_import_expressions).
\
\
For deno:
```js
import StalksClient from "https://raw.githubusercontent.com/cptpiepmatz/stalks.js/master/mod.ts";
```


## Usage

Some basic usage for this.
```js
const client = new StalksClient(YOUR_API_TOKEN);
const stalks = client.stalks;
const accounts = client.accounts;

stalks.fetchWeek()
  .then(console.log)
  .catch(console.error);
  
accounts.fetchCurrentUser()
  .then(console.log)
  .catch(console.error);
```


## Getting an API token

1. Become a patron.
    1. Go to stalks.io [patron page](https://www.patreon.com/join/stalks?).
    2. Choose at least "Blathers".
2. Go to [stalks.io settings](https://stalks.io/settings).
3. Click on "API Access".
4. There you go. You have your token. (You may need to regenerate one.)


## Examples

You can find examples [here](https://github.com/cptpiepmatz/stalks.js/tree/master/examples).
