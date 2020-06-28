export default StalksClient;
declare class StalksClient {
    constructor(token: string);
    private _token;
    stalks: Stalks;
    accounts: Accounts;
}
import Stalks from "./stalks/Stalks.d.ts";
import Accounts from "./accounts/Accounts.d.ts";
