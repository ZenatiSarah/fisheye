export default class Home {
    constructor(photographer) {
        this._data = photographer
    }

    photographerCard() {
        const $wrapper = document.createElement("div");
        $wrapper.setAttribute("id", `${this._data.id}`);
        $wrapper.classList.add('photographe_portrait');


        const cards = `
            <article class="portrait" >
                <figure>
                    <img src="${this._data.portrait}" alt="Portrait du ${this._data.name}"/>
                    <figcaption>${this._data.name}</figcaption>
                </figure>
                 
                <p class="city">${this._data.city}, ${this._data.country}</p>
                <p class="paragraph">${this._data.tagline}</p>
                <p class="price">${this._data.price}€/jour</p>
            </article>
        `

        $wrapper.innerHTML = cards;
        return $wrapper
    }
}

