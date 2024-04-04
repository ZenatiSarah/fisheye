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
    //console.log(medias)
    let image = medias.map((element) => {

        return { image: element.image }
    });

    //console.log(image)
}

export default slides
