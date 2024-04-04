class Api {
  constructor(url) {
    this._url = url;
  }

  async get() {
    // return await fetch(this._url)
    //   .then((res) => res.json())
    //   .then((res) => res.data)
    //   .catch((err) => console.log("error API", err));
    try {
      const res = await fetch(this._url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

class PhotographersApi extends Api {
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    const data = await this.get();
    return data.photographers;
  }
}

class getMediaApi extends Api {
  constructor(url) {
    super(url);
  }

  async getMedia() {
    const data = await this.get();
    return data.media;
  }
}

export { Api, PhotographersApi, getMediaApi };
