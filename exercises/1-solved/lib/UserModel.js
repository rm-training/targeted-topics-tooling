/**
 * There appears to be a lot going on here..
 *
 * - First things first, make this export the appropriate functionality
 * - There are a few concerns here, can we re-organize?
 * - Does this need to be a class anymore?
 */
import {getFromDB, saveToDB} from './Db.js';

let isFaked = true;

class Model {
  static fakeData = [];
  static get(id) {
    return isFaked ? this.fakeData[id] : getFromDB();
  }
  static save(id, data) {
    isFaked ? (this.fakeData[id] = data) : saveToDB();
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
