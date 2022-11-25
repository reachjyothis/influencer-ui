/**
 * Returns authorization header with Token
 * Gets the token from localStorage
 * Returns empty object if no token found
 * @returns {Object} header with 'Authorization' or empty object
 */
export function authHeader() {
  // return authorization header with basic auth credentials
  // let token = localStorage.getItem("token");
  let token = "XaRNLF5tafDTZQWp3akjji17qBul4WLB"

  if (token) {
    return { Authorization: "Token " + token };
  } else {
    return {};
  }
}
