/**
 * 
 * Créer un nouveau tableau d'image
 * Récupérer l'index de chaque image
 * Au click droit, ajouter + 1 au click gauche -1
 * 
 */


/*
import droite from '../../assets/droite.png'
import gauche from '../../assets/gauche.png'

const nombreImage = [];
let nombreSlide = slides.length;

const next = () =>{

}

const previous = () =>{

}
*/

const slides = (medias) => {
    let currentIndex = 0;
    const mediaProvider = Array.from(document.querySelectorAll('.mediasCard img, .mediasCard video'));
    mediaProvider.forEach(media => {
        media.addEventListener("click", () => {
            /**
             * id
             * index
             * 
             */
            console.log('ici');
            const mediaId = medias.findIndex(media => media.id == mediaId);

        })
    });
};


export default slides
