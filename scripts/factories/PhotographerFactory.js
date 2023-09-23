import Photographers from "../models/photographer.js";
class PhotographerFactory {
  constructor(data, type) {
    if (type === "newApi") {
      // better to use a logical statement like photographer, but I don't see that is really needed
      return new Photographers(data);
    } else {
      throw "Unknown type format";
    }
  }
}

export { PhotographerFactory };
