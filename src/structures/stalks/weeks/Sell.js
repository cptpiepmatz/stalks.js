"use strict";

class Sell {
  /**
   * Represents a Sell.
   * @param {SellData} sellData
   */
  constructor(sellData) {
    /**
     * Sell price of the turnips.
     * @type {number}
     */
    this.price = sellData.price;

    /**
     * Number of turnips sold.
     * @type {number}
     */
    this.quantity = sellData.quantity;

    /**
     * The number of slots that were filled when the sale was made.
     * @type {number}
     */
    this.slots = sellData.slots;
  }
}

export default Sell;