export default ProfileError;
export class ProfileError extends Error {
    constructor(message: any, expectedProfile: any);
    expectedProfile: number | string;
}
