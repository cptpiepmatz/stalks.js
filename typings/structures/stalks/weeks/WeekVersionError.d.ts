export default WeekVersionError;
declare class WeekVersionError extends Error {
    constructor(week: any, stalksHTTPError: any, stalks: any);
    week: any;
    stalksHTTPError: any;
    stalks: any;
    forceWeek(): Promise<any>;
}
