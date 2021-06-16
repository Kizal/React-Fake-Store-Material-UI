import axios from "axios";
import BASEURL from "../config/api";


/**
 * Common API method
 * @param {string} method GET | POST | DmobileModelELETE | PATCH
 * @param {string} baseURL http://api.example.com
 * @param {string} url /user/id
 * @param {object} params Query parameters
 * @param {object} headers API headers are appended to common headers
 * @param {object} body API body / Empty by default
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  method,
  url,
  params = {},
  headers = {},
  body = {},
  baseURL = BASEURL.url
) => {
  try {
  
    const commonHeaders = {
      // ...token(),
    };
    const response = await axios({
      method,
      baseURL,
      url,
      params: {
        ...params,
        // ...header(),
      },
      headers: { ...commonHeaders, ...headers },
      data: body,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } 
  catch (error) {
    if (error.response.status === 403) {
    }
    console.log(error);
    if (error.response) {
      if (error.response.status && error.response.status === 403) {
        console.log("UnAuthorized User");
      }
      return {
        data: error,
        message: error.response.statusText,
        status: error.response.status,
      };
    }
    if (error.request) {
      return {
        // data: error.request,
        message: "Internal Server Error",
        status: 500,
      };
    }
  }
};
