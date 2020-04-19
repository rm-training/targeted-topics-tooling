/**
 * Here we have a contrived "Authentication Module"
 *
 * Refactor this so it is an ES Module
 * - has the appropriate exports
 * - should it be a named or default export?
 * - should it really be an "IIFE" anymore?
 * - should anything remain "private"?
 */

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

// I prefer explicit exports (and imports)
//export { login, logout };

// but you can use defaults
// to (more closely) replicate what we had before...
export default {
  login,
  logout,
};
