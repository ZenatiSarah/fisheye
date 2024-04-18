class Lightbox {

    static init() {
        const imagesVideos = document.querySelectorAll('.medias'); // attribut class de mes images et videos

        console.log(imagesVideos)

        imagesVideos.forEach(media => {

            media.addEventListener('click', (e) => {
                e.preventDefault();
                console.log("ici")

                new Lightbox(e.currentTarget.getAttribute('src'))

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

export default Lightbox;