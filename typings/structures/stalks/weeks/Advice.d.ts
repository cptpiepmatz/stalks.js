export default Advice;
declare class Advice {
    constructor(adviceData: any);
    sell: boolean;
    advice: string;
    prediction: Prediction;
    odds: {
        [x: string]: number;
    };
    toJSON(): any;
}
import Prediction from "./Prediction.d.ts";
