/**
 * A module that will use "SharedModule"
 */

// all these will be imported as "const" -- they can't be re-assigned
import { sharedVar, sharedObject, mutateSharedVar } from "./SharedModule.js";

console.log('I am the shared var via "sharing 1":', sharedVar);
console.log('I am the shared object via "sharing 1":', sharedObject);

// this will error out because, although it is defined as a "let" it will be imported as a "const"
//sharedVar = "Hello From Shared One";

// but we can mutate it within the module itself
mutateSharedVar("Mutated by SharingOne");

// we can mutate shared objects, too
sharedObject.hello = "Mutated by SharingOne";
