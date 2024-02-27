import { PhotographersApi, getMediaApi } from "../api/Api.js";
import { displayModal } from '../modules/modal.js' // lancement de la modale //

//------------------------- INFO Photographe + images/vidéos------------------------------

//Récupération de l'id de ma page
const url_id = window.location.search;
const idUnique = url_id.slice(1);

//Api photographer
const api = new PhotographersApi('../data/photographers.json');
const data = await api.getPhotographers();
const dataUnique = data.filter(function (element) {
    return element.id == idUnique
});

// Api mdia
const apiMedia = new getMediaApi('../data/photographers.json');
const dataMedia = await apiMedia.getMedia();

const dataMediaFilter = dataMedia.filter(function (element) {
    return element.photographerId == idUnique
});
console.log(dataMedia)
//-------------------- Affichage photos et vidéos ----------------------------------------------------------------

const divPhotographerMedia = document.querySelector('.photographer_section');
let mediaPhotographer = '';
console.log(dataMediaFilter)
dataMediaFilter.forEach(element => {

    let name = dataUnique[0].name;
    const mediaElement = element.image
        ? `<img width="320" src="./assets/photographers/${name.split(" ")[0]}/${element.image}" alt="image de ${element.image}"/>`
        : `<video width="320" height="240" controls> <source src="./assets/photographers/${name.split(" ")[0]}/${element.video}" type="video/mp4"></video>`;
    //====To do===
    const mediaCard = `
    <article>
            <div>
                ${mediaElement}
                <p class="title-like">${element.title} <img class="like" width="50px" height="50px" src="./assets/images/favoris.png" alt="aime"/></p>
                
            </div>
    </article>
    `


    mediaPhotographer += mediaCard;


});


//Template Media

divPhotographerMedia.innerHTML = mediaPhotographer;


//Récupération de ma class html
const divPhotographer = document.querySelector('.photograph-header');

//Chemin vers l'image du photographe
const picture = `../../assets/photographers/id/${dataUnique[0].portrait}`

//Template Photographers
const monPhotographe = `

    <div class="photographe_texte">
        <h1>${dataUnique[0].name}</h1>
        <p class="city_country">${dataUnique[0].city}, ${dataUnique[0].country}</p>
        <p>${dataUnique[0].tagline}</p>
    </div>
    <button class="contact_button" >
          Contactez-moi
    </button>
    <img src="${picture}" alt="portrait du photographe" />
    
    `
divPhotographer.innerHTML = monPhotographe;


//Affichage de la modal : 

const contact = document.querySelector('.contact_button')
contact.addEventListener('click', () => displayModal())

// ----------------------------- Filtre des médias -------------------------------------------------------

const likes = dataMediaFilter.filter(function (element) {
    return element.likes
})

console.log(likes)