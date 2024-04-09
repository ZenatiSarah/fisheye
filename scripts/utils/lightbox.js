class Lightbox {

    static init() {
        const imagesVideos = Array.from(document.querySelectorAll('.mediasCard img, .mediasCard video'))
            .forEach(media => {
                media.addEventListener('click', e => {
                    console.log("tst")
                    e.preventDefault();
                    new Lightbox(e.currentTarget.getAttribute('src'))
                })
            })
    }

    constructor(url) {

    }
    buildDOM(url) {
        const dom = createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTL = `
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
        <img src="${url}" alt="">
        </div>
        `
    }
}

export default Lightbox;