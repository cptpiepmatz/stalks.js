export default Accounts;
export class Accounts {
    constructor(token: string);
    _endpoint: string;
    _token: string;
    private getAuthHeader;
    private getFriendsEndpoint;
    fetchFriends(): Promise<Profile[]>;
    addFriend(profile: any): Promise<Profile>;
    removeFriend(profile: number | any): Promise<any>;
    fetchCurrentUser(): Promise<Profile>;
    updatePassport(passport: any): Promise<Passport>;
    fetchPassport(): Promise<Passport>;
}
import Profile from "./profile/Profile.d.ts";
import Passport from "./passport/Passport.d.ts";
