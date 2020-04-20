import { doMath, sayHello, renamed as newName } from "./util.js";
import myDefault from "./util.js"

console.log(doMath(1, 2));
sayHello();
newName();

console.log('The default import', myDefault);