export default class Lightbox {

    static init() {
        const links = Array.from(document.querySelectorAll('.medias'))
        console.log(links)
        links.forEach(link => {

            link.addEventListener('click', (e) => {
                e.preventDefault();
                console.log("ici")

                new Lightbox(e.currentTarget.getAttribute('href')) // l'url de mon lien

            })
        })
    }
    constructor(url) {
        const element = this.buildDOM(url);
        document.body.appendChild(element)
    }
    buildDOM(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTL = `
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
        <img src="${url}" alt="">
        </div>
        `
        return dom
    }
}
