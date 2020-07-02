"use strict";

class Buy {
  /**
   * Represents a Buy.
   * @param {BuyData} buyData
   */
  constructor(buyData) {
    /**
     * Indicating whether the turnips were purchased locally.
     * @type {boolean}
     */
    this.local = buyData.local;

    /**
     * String to mark where the turnips were purchased from.
     * @type {?string}
     */
    this.label = buyData.label;

    /**
     * Buy price of the turnips (between 90 and 110, inclusive).
     * @type {number}
     */
    this.price = buyData.price;

    /**
     * The number of turnips purchased.
     * @type {number}
     */
    this.quantity = buyData.quantity;
  }
}

export default Buy;
export { Buy };