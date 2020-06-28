export default Week;
declare class Week {
    static getDateSunday(date: any): Date;
    constructor(weekData: any);
    id: number;
    date: Date;
    buys: Buy[];
    buyLocalFirstTime: boolean;
    sells: Sell[];
    localPrice: number;
    prices: number[];
    manualPreviousPattern: string;
    readonly previousPattern: string;
    readonly profit: number;
    readonly advice: Advice;
    friendWeeks: FriendWeek[];
    version: number;
    toJSON(): any;
}
import Buy from "./Buy.d.ts";
import Sell from "./Sell.d.ts";
import Advice from "./Advice.d.ts";
import FriendWeek from "./FriendWeek.d.ts";
