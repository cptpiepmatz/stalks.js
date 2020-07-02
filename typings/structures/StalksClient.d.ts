export default StalksClient;
export class StalksClient {
    constructor(token: string);
    private _token;
    stalks: Stalks;
    accounts: Accounts;
}
import Stalks from "./stalks/Stalks.d.ts";
import Accounts from "./accounts/Accounts.d.ts";
