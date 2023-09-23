import { PhotographersApi, getMediaApi } from "./api/Api.js";
import Photographers from "./models/photographer.js";
import Home from "./templates/home.js"

export default class App {
  constructor() {
    this.photographerApi = new PhotographersApi("../data/photographers.json");
    this.mediaApi = new getMediaApi('../data/photographers.json');
    this.photographersSection = document.querySelector(".photographer_section");
    this.photographer = document.querySelector(".photographe_portrait");
  }

  async main() {
    const data = await this.photographerApi.getPhotographers();
    const dataMedia = await this.mediaApi.getMedia();

    data
      .map(photographers => new Photographers(photographers))
      .forEach(i => {
        const template = new Home(i);
        this.photographersSection.appendChild(template.photographerCard()).addEventListener('click', () => {
          window.location = `photographer.html?${i.id}`,
            dataMedia
        })
      });
  }
}

const app = new App();
app.main();
