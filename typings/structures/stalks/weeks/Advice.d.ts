export default Advice;
declare class Advice {
    constructor(adviceData: any);
    sell: boolean;
    advice: string;
    prediction: any;
    odds: {
        [x: string]: number;
    };
}
