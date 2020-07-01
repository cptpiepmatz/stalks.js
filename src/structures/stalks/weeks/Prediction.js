"use strict";

class Prediction {
  /**
   * Represents a prediction in an advice.
   * @param {PredictionData} predictionData
   */
  constructor(predictionData) {
    /**
     * @type {Object<Object<Array<Array<number, number>>>>}
     */
    this.possible = predictionData.possible;

    /**
     * @type {Object<Object<Array<Array<number, number>>>>}
     */
    this.likely = predictionData.likely;
  }
}

export default Prediction;