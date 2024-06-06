export default class Lightbox {
    constructor(medias, datas) {
        this.medias = medias;
        this.datas = datas
        this.photographerName = datas[0].name.split(" ")[0];
        this.addListener(medias, datas)
        console.log('dom construit !')
        this.divLightbox = document.querySelector('.section_lightbox');
        this.index = 1;
        this.buildDOM()
    }

    addListener() {
        const links = Array.from(document.querySelectorAll('.medias'))
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.index = e.target.dataset.index;
                this.showImage();
                this.divLightbox.classList.add('visible');

            })
        })

    }

    showImage() {
        let url = this.medias[this.index].image
            ? `<img src="./assets/photographers/${this.photographerName}/${this.medias[this.index].image}" alt="image de ${this.medias[this.index].image}" class="medias"/>`
            : `<video height="240" controls> <source src="./assets/photographers/${this.photographerName}/${this.medias[this.index].video}" type="video/mp4" class="medias"></video>`;
        let lightboxContainer = document.querySelector('.lightbox__container');
        lightboxContainer.innerHTML = url
    }

    buildDOM() {
        const dom = document.querySelector('.section_lightbox');
        dom.classList.add('lightbox')
        dom.innerHTML = `
        <button class="lightbox__close" aria-label="close">Fermer</button>
        <button class="lightbox__next" aria-label="next">Suivant</button>
        <button class="lightbox__prev" aria-label="previous">Précédent</button>
        <div class="lightbox__container"></div> `

        let boutonferme = dom.querySelector('.lightbox__close')
        boutonferme.addEventListener('click', () => {
            this.hideLightbox();
        });

        const prevSlide = dom.querySelector('.lightbox__prev');
        prevSlide.addEventListener('click', () => {
            this.goPreviousSlide();
        });
        const nextSlide = dom.querySelector('.lightbox__next');
        nextSlide.addEventListener('click', () => {
            this.goNextSlide()
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === "ArrowRight") {
                console.log(e.code)
                this.goNextSlide();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === "ArrowLeft") {
                console.log(e.code)
                this.goPreviousSlide();
            }
        });
        document.addEventListener('keydown', (e) => {
            console.log(e.code)
            if (e.code === "Escape") {
                this.hideLightbox();
            }
        });
        return dom;
    }
    hideLightbox() {
        this.divLightbox.classList.remove('visible');
    }

    goPreviousSlide() {
        const mediaLength = this.medias.length;
        this.index == 0 ? this.index = mediaLength - 1 : this.index--;
        this.showImage()
    }
    goNextSlide() {
        const mediaLength = this.medias.length;
        this.index >= mediaLength - 1 ? this.index = 0 : this.index++;
        this.showImage()
    }

}
