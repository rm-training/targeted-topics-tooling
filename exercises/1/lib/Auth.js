/**
 * Here we have a contrived "Authentication Module"
 *
 * Refactor this so it is an ES Module
 * - has the appropriate exports
 * - should it be a named or default export?
 * - should it really be an "IIFE" anymore?
 * - should anything remain "private"?
 */
const Auth = (function () {
  function login(user) {
    console.log("Logged in", user);
    return getToken();
  }
  function logout(token) {
    console.log("Logged out", token);
  }
  function getToken() {
    return "tojafeijoijsef";
  }
  return {
    login,
    logout,
  };
})();

// @todo missing some exports
