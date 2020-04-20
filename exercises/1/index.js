/**
 * The exercise:
 *
 * We want to clean up this code + the modules (in ./lib)
 * To get the code to run. Please don't fret over the implementation
 * here... it is contrived and just for getting things rolling.
 *
 * index.js
 * This is your entry point. To see it work:
 *   npm run exercise-1
 *
 */

// @todo import named imports from UserModel
// @todo import the default from Auth

// sets some data data
setFakeUserData([
  { id: 1, username: "username" },
  { id: 2, username: "jimbob" },
]);

// get a "user" record - id:1
const user = UserModel.get(1);

// "log in" the user and get a "token"
const token = Auth.login(user);

// if the user logged in, log their name...
if (token) {
  console.log(`Welcome ${user.username}`);
}
