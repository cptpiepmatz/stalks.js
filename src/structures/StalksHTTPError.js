"use strict";

class StalksHTTPError extends Error {

  /**
   * The error that can occur on connecting to the stalks server.
   * @param {number} code - The HTTP error code.
   * @param {string} method - The HTTP method use for the request.
   * @param {string} path - The request path.
   * @param {Response} response - The fetch response.
   */
  constructor(code, method, path, response) {
    super();
    this.code = code;
    this.method = method;
    this.path = path;
    this.response = response
  }

  /**
   * Returns the status name.
   * @returns {string|null}
   */
  get name() {
    switch (this.code) {
      case 400:
        return "Bad Request";
      case 403:
        return "Forbidden";
      case 404:
        return "Not Found";
      case 429:
        return "Too Many Requests";
      case 418:
        return "I'm a teapot";
      default:
        return null;
    }
  }

  /**
   * Returns a small description of the error.
   * @returns {string}
   */
  get message() {
    switch (this.code) {
      case 400:
        return "Invalid Request. Unexpected or missing data."
      case 403:
        return "Incorrect Authorization Token."
      case 404:
        return "Element does not exist.";
      case 429:
        return "You're too fast.";
      case 418:
        return "The server is running a newer version."
      default:
        return "";
    }
  }

  /**
   * Returns the body of the response.
   * @returns {Promise<Object>}
   */
  async getBody() {
    return this.response.json();
  }
}

export default StalksHTTPError;
export { StalksHTTPError };