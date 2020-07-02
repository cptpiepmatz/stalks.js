export default StalksHTTPError;
export class StalksHTTPError extends Error {
    constructor(code: number, method: string, path: string, response: Response);
    code: number;
    method: string;
    path: string;
    response: Response;
    getBody(): Promise<any>;
}
