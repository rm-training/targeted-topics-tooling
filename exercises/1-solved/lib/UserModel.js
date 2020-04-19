/**
 * There appears to be a lot going on here..
 *
 * - First things first, make this export the appropriate functionality
 * - There are a few concerns here, can we re-organize?
 * - Does this need to be a class anymore?
 */
const getFromDB = function () {};
const saveToDb = function () {};
let isFaked = true;

class Model {
  static fakeData = [];
  static get(id) {
    return isFaked ? this.fakeData[id] : getFromDB();
  }
  static save(id, data) {
    isFaked ? (this.fakeData[id] = data) : saveToDb();
  }
}

function fakeData(data) {
  UserModel.fakeData = data;
}

class UserModel extends Model {
  static fakeData = [];
  static save(id, data) {
    data.username = data.username.trim();
    super.save(id, data);
  }
}

export { UserModel, fakeData as setFakeUserData };
