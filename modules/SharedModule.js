/**
 * An example of a module that will be shared by other scripts
 *
 * Modules behave like a closure; a scope that is retained
 * Users (importers) of this module will be sharing the same "instance" or "scope" of the module
 *
 * That is, if two importers modify the internals of the module that modification will be shared
 */
export let sharedVar = "Hello";
export const sharedObject = {
  id: 10,
  label: "I am shared"
};

export const mutateSharedVar = value => {
  sharedVar = value;
};
