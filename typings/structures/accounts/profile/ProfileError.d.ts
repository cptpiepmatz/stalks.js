export default ProfileError;
declare class ProfileError extends Error {
    constructor(message: any, expectedProfile: any);
    expectedProfile: number | string;
}
