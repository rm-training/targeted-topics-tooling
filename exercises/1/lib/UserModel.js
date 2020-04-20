/**
 * There appears to be a lot going on here..
 *
 * - First things first, make this export the appropriate functionality
 * - There are a few concerns here, can we re-organize?
 * - Does this need to be a class anymore?
 */

// database specific stuff...
// @todo - bonus - this should probably be in its own DB module
const getFromDB = function () {};
const saveToDB = function () {};
let isFaked = true;

// main class/module dealing with record manipulation in a store
// @todo - bonus - this could probably be its own module, too
class Model {
  static fakeData = [];
  static get(id) {
    return isFaked ? this.fakeData[id] : getFromDB();
  }
  static save(id, data) {
    isFaked ? (this.fakeData[id] = data) : saveToDB();
  }
}

// dummy function that helps "set fake user records" for testing
function fakeData(data) {
  UserModel.fakeData = data;
}

// user-specific record store and manipulation
class UserModel extends Model {
  static fakeData = [];
  static save(id, data) {
    data.username = data.username.trim();
    super.save(id, data);
  }
}

// @todo - export fakeData as... setFakeUserData
// @todo - export the UserModel
