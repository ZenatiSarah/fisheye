export default class Lightbox {
    constructor(medias, datas) {
        this.medias = medias;
        this.addListener(medias, datas)
        console.log('dom construit !')
        this.divLightbox = document.querySelector('.section_lightbox');
        this.buildDOM()
    }

    addListener(medias, datas) {
        const links = Array.from(document.querySelectorAll('.medias'))
        links.forEach((link) => {
            let index = link.dataset.index;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                let url = medias[index].image
                    ? `<img src="./assets/photographers/${datas[0].name.split(" ")[0]}/${medias[index].image}" alt="image de ${medias[index].image}" class="medias"/>`
                    : `<video height="240" controls> <source src="../../assets/photographers/${datas[0].name.split(" ")[0]} / ${medias[index].video}" type="video / mp4" class="medias"></video>`;
                //this.showLightbox(index)
                let lightboxContainer = document.querySelector('.lightbox__container');
                lightboxContainer.innerHTML = url
                console.log(lightboxContainer)
                this.divLightbox.classList.add('visible');

            })
        })

    }
    /*
        showLightbox(indexImage) {
            console.log(indexImage)
            console.log(this.medias[indexImage])
            //this.showImage()
        }*/

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
        });

        const prevSlide = dom.querySelector('.lightbox__prev');
        prevSlide.addEventListener('click', () => {
            this.previousSlide();
        });
        const nextSlide = dom.querySelector('.lightbox__next');
        nextSlide.addEventListener('click', () => {
            this.nextSlide();
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
