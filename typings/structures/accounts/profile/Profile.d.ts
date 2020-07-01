export default Profile;
declare class Profile {
    constructor(profileData: any);
    id: number;
    username: string;
    villagerName: string | null;
    townName: string | null;
    patronLevel: number | null;
    weeks: Week[];
    toString(): string;
}
import Week from "../../stalks/weeks/Week.d.ts";
