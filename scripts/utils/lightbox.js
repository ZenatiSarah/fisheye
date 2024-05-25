export default class Lightbox {
    constructor(medias, datas) {
        this.medias = medias;
        // const element = this.buildDOM(url);
        //document.body.appendChild(element)
        this.addListener(medias, datas)
        console.log('dom construit !')
        this.divLightbox = document.querySelector('.section_lightbox');
        //console.log(element)
        this.buildDOM()
    }

    addListener(medias, datas) {
        const links = Array.from(document.querySelectorAll('.medias'))
        links.forEach((link) => {
            console.log(link)
            let index = link.dataset.index;
            console.log(index)
            link.addEventListener('click', (e) => {

                e.preventDefault();

                const url = medias[index].image
                    ? `<img src="./assets/photographers/${datas[0].name.split(" ")[0]}/${medias[index].image}" alt="image de ${medias[index].image}" class="medias"/>`
                    : `<video height="240" controls> <source src="../../assets/photographers/${datas[0].name.split(" ")[0]} / ${medias[index].video}" type="video / mp4" class="medias"></video>`;
                console.log(url)
                this.showLightbox(index)
            })
        })
    }

    showLightbox(indexImage) {
        console.log(indexImage)
        console.log(this.medias[indexImage])
        this.showImage()
        this.divLightbox.classList.add('visible');
    }
    showImage() {
        const lightboxContainer = document.querySelector('.lightbox__container')
        lightboxContainer.innerHTML = `<img src="./assets/photographers/Ellie-Rose/Sport_Race_End.jpg" alt="image de Sport_Race_End.jpg" class="medias"/>`
    }

    buildDOM() {
        const dom = document.querySelector('.section_lightbox');
        dom.classList.add('lightbox')
        dom.innerHTML = `
        <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">

        </div>
        `
        let boutonferme = dom.querySelector('.lightbox__close')
        boutonferme.addEventListener('click', () => {
            this.hideLightbox();
        })

        return dom;
    }
    hideLightbox() {
        this.divLightbox.classList.remove('visible');
    }

    previousSlide() {
        console.log('Slide précédente ')
    }
    nextSlide() {
        console.log('Slide suivante ')
    }

}
