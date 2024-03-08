//DOM
const body = document.querySelector('.bodyPhotographer')
const main = document.getElementById('mainPhotographer')
const contact = document.querySelector('.contact_button')
const modalBg = document.querySelector('#background_modal')
const modal = document.querySelector('.modal')
const close = document.getElementById('closeModal')
const submit = document.getElementById('submit')
const form = document.getElementById('form')

//Ouverture Modale
contact.addEventListener('click', (event) => {
    event.preventDefault();
    displayModal();
})
close.addEventListener('click', (event) => {
    event.preventDefault()
    closeModal();
})

function displayModal() {

    console.log("Je suis là");
    modalBg.style.display = 'block'
    modalBg.setAttribute('aria-hidden', 'false')
    //contact.style.display = 'none'
    main.setAttribute('aria-hidden', 'true')
    body.classList.add('no-scroll')
    //firstName.focus()
    modal.setAttribute('tabindex', '0')

    let nom = document.getElementById('name').value
    let prenom = document.getElementById('firstname').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    form.checkValidity()
    console.log(nom, prenom, email, message) // mettre sous forme d'objet
}
//Fermeture Modale
function closeModal() {
    console.log("close")
    modalBg.style.display = 'none'
}



//Regex


// --- Nom --
// --- Prénom --
// --- Mail --
// --- Message --
// --- envoi --

export { displayModal }
