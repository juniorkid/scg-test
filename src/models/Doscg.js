
class DOSCG {
  constructor(name) {
    this.name = name;
  }

  static getName() {
    return this.name
  }

  static setName(name) {
    this.name = name;
    return this
  }
}