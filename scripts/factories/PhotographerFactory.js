import Photographers from "../models/photographer.js";
class PhotographerFactory {
  constructor(data, type) {
    if (type === "newApi") {
      return new Photographers(data);
    } else {
      throw "Unknown type format";
    }
  }
}

export { PhotographerFactory };
