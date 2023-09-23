// //Je créé ma classe parent

export default class Photographers {
  //création de l'objet
  constructor(data) {
    this.id = data.id;
    this._name = data.name;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._portrait = data.portrait;
  }

  //récupération des propriétés grâce au méthode
  get name() {
    return this._name;
  }

  get city() {
    return this._city;
  }

  get country() {
    return this._country;
  }

  get tagline() {
    return this._tagline;
  }

  get price() {
    return this._price;
  }

  get portrait() {
    return `/assets/photographers/${this._portrait}`;
  }
}
