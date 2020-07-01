export default Stalks;
declare class Stalks {
    constructor(token: string);
    _endpoint: string;
    _token: string;
    private getAuthHeader;
    private getEndpoint;
    private getWeeksEndpoint;
    private getProfileEndpoint;
    fetchWeek(date?: any, createNew?: boolean): Promise<Week>;
    createWeek(date?: any): Promise<Week>;
    updateWeek(week: Week, force?: boolean): Promise<Week>;
    resetWeekPrices(weekOrDate?: Week | any, createNew?: boolean): Promise<Week>;
    fetchUserProfile(username: string): Promise<Profile>;
}
import Week from "./weeks/Week.d.ts";
import Profile from "../accounts/profile/Profile.d.ts";
