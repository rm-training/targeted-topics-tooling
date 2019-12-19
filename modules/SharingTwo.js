/**
 * A second module that will use "SharedModule"
 */

import { sharedVar, sharedObject, mutateSharedVar } from "./SharedModule.js";

console.log('I am the shared var via "sharing 2":', sharedVar);
console.log('I am the shared object via "sharing 2":', sharedObject);

// this module is imported AFTER SharingOne so, while it can mutate the shared values
// it will happen after SharingOne has been interpreted and run
mutateSharedVar("Mutated by SharingTwo");
sharedObject.hello = "Mutated by SharingTwo";
