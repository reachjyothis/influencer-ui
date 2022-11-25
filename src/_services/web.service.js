import config from "./config";
import { authHeader } from "../_helpers";

export const webService = {
    req,
    handleResponse,
  };
  
  export const HttpMethod = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE",
  };
  
  function req(method, url, data = {}) {
    const methodsWithData = [HttpMethod.POST, HttpMethod.PATCH];
  
    const headers = methodsWithData.includes(method)
      ? Object.assign({}, authHeader(), { "Content-Type": "application/json" })
      : authHeader();
    const requestOptions = {
      method: method,
      headers: headers,
    };
    if (methodsWithData.includes(method)) {
      requestOptions["body"] = JSON.stringify(data);
    }
  
    return fetch(`${config.apiUrl}${url}`, requestOptions).then(handleResponse);
  }

function handleResponse(response) {
  if (response.status === 204) {
    return { message: "No content." };
  }
  return response.json().then((data) => {
    if (!response.ok) {
      if (response.status === 401) {
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}