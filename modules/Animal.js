class Animal {

  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return `${this.name} says: ${this.sounds}`;
  }

  run() {
    this.isRunning = true;

    return `${this.name} is running`;
  }

}

export default Animal;