export default FriendWeek;
declare class FriendWeek {
    constructor(friendWeekData: any);
    id: number;
    username: string;
    prices: number[];
    readonly advice: Advice;
}
import Advice from "./Advice.d.ts";
