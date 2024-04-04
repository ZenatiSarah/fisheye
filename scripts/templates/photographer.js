import { PhotographersApi, getMediaApi } from "../api/Api.js";
import { displayModal } from '../utils/modal.js' // lancement de la modale //
import filterMedias from '../utils/filtre.js'
import displayTotalLikes from "../utils/like.js";
import slides from "../utils/slide.js";

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

//Modal 
const contact = document.querySelector('.contact_button');
contact.addEventListener('click', () => displayModal());

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
    <p><span id="totalLikes">${photographerLikes} </span> ${dataPhotographer[0].price}€/ jour</p> 
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
        <img src="${picture}" alt="portrait du photographe" 
    `
    bioPhotographer.innerHTML = bio;

    /**--------------CARTS ------- */
    let mediaPhotographer = '';

    medias.forEach((element, index) => {
        // console.log("index display media : ", index)
        let name = dataPhotographer[0].name;
        const mediaElement = element.image
            ? `<img width="320" src="./assets/photographers/${name.split(" ")[0]}/${element.image}" alt="image de ${element.image}"/>`
            : `<video width="320" height="240" controls> <source src="./assets/photographers/${name.split(" ")[0]}/${element.video}" type="video/mp4"></video>`;

        const mediaCard = `
            <article>
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

//Likes
displayTotalLikes(mediasPhotographer);

//slides
slides(mediasPhotographer)