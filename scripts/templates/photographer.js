import { PhotographersApi, getMediaApi } from "../api/Api.js";

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
//------------------------------------------------------------------------------------
dataMediaFilter.forEach(element => {
    const divPhotographerMedia = document.querySelector('.photographer_section');

    //Name photographer 
    let name = dataUnique[0].name;
    const nameSplit = name.split(" ")

    const image = `/assets/photographers/${nameSplit[0]}/${element?.image}`
    const video = `/assets/photographers/${nameSplit[0]}/${element?.video}`

    const mediaImage = image.split('.').pop();
    const mediaVideo = video.split('.').pop();

    let mediaPhotographer;

    if (mediaVideo === "mp4") {

        //balise img
        mediaPhotographer = `
        <article>
                <figure>
                    <video src="${video}"/>
                    <figcaption>${element.title}</figcaption>
                    </figure>
        </article>
        `
    } else if (mediaImage === 'jpg')
        //balise video
        mediaPhotographer = `
        <article>
                <figure>
                    <img src="${image}"/>
                    <figcaption>${element.title}</figcaption>
                    </figure>
        </article>
        `

    //Template Media

    divPhotographerMedia.innerHTML = mediaPhotographer;
});

//Récupération de ma class html
const divPhotographer = document.querySelector('.photograph-header');

//Chemin vers l'image du photographe
const picture = `/assets/photographers/${dataUnique[0].portrait}`

//Template Photographers
const monPhotographe = `

    <div class="photographe_texte">
        <h1>${dataUnique[0].name}</h1>
        <p class="city_country">${dataUnique[0].city}, ${dataUnique[0].country}</p>
        <p>${dataUnique[0].tagline}</p>
    </div>
    <button class="contact_button" onclick="displayModal()">
          Contactez-moi
    </button>
    <img src="${picture}" alt="portrait du photographe" />
    
    `
divPhotographer.innerHTML = monPhotographe;


//return divPhotographer