export default Passport;
export class Passport {
    constructor(passportData?: any);
    username: string;
    villagerName: string;
    townName: string;
    friendCode: string;
    boughtLocal: boolean;
    patronLowkey: boolean | null;
    toJSON(): any;
}
