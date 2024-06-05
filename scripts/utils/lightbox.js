export default class Lightbox {
    constructor(medias, datas) {
        this.medias = medias;
        this.datas = datas
        this.addListener(medias, datas)
        console.log('dom construit !')
        this.divLightbox = document.querySelector('.section_lightbox');
        this.index = 1;
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
                this.showIndex(index)
                let lightboxContainer = document.querySelector('.lightbox__container');
                lightboxContainer.innerHTML = url
                this.divLightbox.classList.add('visible');

            })
        })

    }

    showIndex(indexImage) {
        this.index = indexImage;
        console.log("Mon index actuel", this.index);
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
            this.goPreviousSlide(this.medias, this.datas);
        });
        const nextSlide = dom.querySelector('.lightbox__next');
        nextSlide.addEventListener('click', () => {
            this.goNextSlide(this.medias, this.datas)
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === "ArrowRight") {
                console.log(e.code)
                this.goNextSlide(this.medias, this.datas);
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === "ArrowLeft") {
                console.log(e.code)
                this.goPreviousSlide(this.medias, this.datas);
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

    goPreviousSlide(medias, datas) {
        let lightboxContainer = document.querySelector('.lightbox__container');
        const mediaLength = this.medias.length;
        this.index == 0 ? this.index = mediaLength - 1 : this.index--;
        let url = this.medias[this.index].image
            ? `<img src="./assets/photographers/${datas[0].name.split(" ")[0]}/${medias[this.index].image}" alt="image de ${medias[this.index].image}" class="medias"/>`
            : `<video height="240" controls> <source src="../../assets/photographers/${datas[0].name.split(" ")[0]} / ${medias[this.index].video}" type="video / mp4" class="medias"></video>`;
        lightboxContainer.innerHTML = url
    }
    goNextSlide(medias, datas) {
        const mediaLength = this.medias.length;
        this.index >= mediaLength - 1 ? this.index = 0 : this.index++;
        let lightboxContainer = document.querySelector('.lightbox__container');
        let url = this.medias[this.index].image
            ? `<img src="./assets/photographers/${datas[0].name.split(" ")[0]}/${medias[this.index].image}" alt="image de ${medias[this.index].image}" class="medias"/>`
            : `<video height="240" controls> <source src="../../assets/photographers/${datas[0].name.split(" ")[0]} / ${medias[this.index].video}" type="video / mp4" class="medias"></video>`;
        lightboxContainer.innerHTML = url
    }

}
