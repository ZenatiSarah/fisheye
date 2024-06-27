import { PhotographersApi, getMediaApi } from "../api/Api.js";
import { displayModal } from '../utils/modal.js'
import filterMedias from '../utils/filtre.js'
import displayTotalLikes from "../utils/like.js";
import Lightbox from "../utils/lightbox.js";
import MediaFactory from '../utils/mediaFactory.js'

//Récupération de l'id de ma page
const url_id = window.location.search;
const idUnique = url_id.slice(1);

//Mon photographe
const api = new PhotographersApi('../data/photographers.json');
const data = await api.getPhotographers();
const dataPhotographer = data.filter(function (element) {
    return element.id == idUnique;
});

//Api medias
const apiMedia = new getMediaApi('../data/photographers.json');
const dataMedia = await apiMedia.getMedia();
let mediasPhotographer = dataMedia.filter(function (element) {
    return element.photographerId == idUnique;
});

//Filtre 
const filter = document.getElementById("filter_select");
filter.addEventListener("click", function (event) {
    event.preventDefault();

    filterMedias(filter.value, mediasPhotographer);
    displayMedia(mediasPhotographer);
});


/**---------- totalLikes ------- */

let photographerLikes = mediasPhotographer.reduce((accumulator, mediasPhotographer) =>
    accumulator + mediasPhotographer.likes, 0);
const divtotalLikes = document.getElementById('priceandlikes');

const likeAndPrice = `
    <p id="totalLikes"> 
    <span id="likes">${photographerLikes}</span>
    <img id="liketotal" width="18px" height="18px" src="./assets/images/favoris.png" alt="aime"/> ${dataPhotographer[0].price}€/ jour</p> 
    `
divtotalLikes.innerHTML = likeAndPrice;

//Template 
const displayMedia = (medias) => {
    const divPhotographerMedia = document.querySelector('.photographer_section');
    const bioPhotographer = document.querySelector('.photograph-header');
    const picture = `../../assets/photographers/id/${dataPhotographer[0].portrait}`

    /**-----------HEADER---------- */
    const bio = `
        <div class="photographe_texte">
            <h1>${dataPhotographer[0].name}</h1>
            <p class="city_country">${dataPhotographer[0].city}, ${dataPhotographer[0].country}</p>
            <p>${dataPhotographer[0].tagline}</p>
        </div>
        <button class="contact_button" >
            Contactez-moi
        </button>
        <img src="${picture}" alt="portrait du photographe" />
    `
    bioPhotographer.innerHTML = bio;

    /**-------------- CARTS ------- */
    let mediaPhotographer = '';

    medias.forEach((element, index) => {
        let name = dataPhotographer[0].name;

        const mediaElement = MediaFactory.getMediaTag(element, name.split(" ")[0], index);
        const mediaCard = `
            <article class="mediasCard">
                ${mediaElement}
                <div class="title-like">
                <p class="title-like">${element.title} </p>
                <span id=${"like" + index}  > ${element.likes}</span>
                    <button class='btn-like'>
                    <img id="like" width="50px" height="50px" src="./assets/images/favoris.png" alt="aime"/>
                    </button>
                </div>
            </article>
        `
        mediaPhotographer += mediaCard;
    });
    divPhotographerMedia.innerHTML = mediaPhotographer;


}
displayMedia(mediasPhotographer);


//Modal 
const contact = document.querySelector('.contact_button');
contact.addEventListener('click', () => displayModal());

//Likes
displayTotalLikes(mediasPhotographer);

// --------- Lightbox--------
const lightbox = new Lightbox(mediasPhotographer, dataPhotographer)
