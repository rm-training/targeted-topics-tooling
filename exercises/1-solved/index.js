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

import { UserModel as User, setFakeUserData } from "./lib/UserModel.js";
import Auth from "./lib/Auth.js";

setFakeUserData([
  { id: 1, username: "username" },
  { id: 2, username: "jimbob" },
]);

const user = User.get(1);

const token = Auth.login(user);

if (token) {
  console.log(`Welcome ${user.username}`);
}
