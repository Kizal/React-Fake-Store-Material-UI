import axios from "axios";
import BASEURL from "../config/api";

/**
 * Common API method
 * @param {string} method GET | POST | DELETE | PATCH
 * @param {string} url /user/id
 * @param {object} params Query parameters
 * @param {object} headers API headers are appended to common headers
 * @param {object} body API body / Empty by default
 */
const callApi = async (method, url, params = {}, headers = {}, body = {}) => {
  try {
    const response = await axios({
      method,
      baseURL: BASEURL.url,
      url,
      params,
      headers: {
        ...headers,
      },
      data: body,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      data: error.response || {},
      message:
        error.response && error.response.statusText
          ? error.response.statusText
          : "Internal Server Error",
      status:
        error.response && error.response.status ? error.response.status : 500,
    };
  }
};

export default callApi;
