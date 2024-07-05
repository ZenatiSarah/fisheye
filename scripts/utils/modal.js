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

const displayModal = () => {
    modalBg.style.display = 'block'
    modalBg.setAttribute('aria-hidden', 'false')
    main.setAttribute('aria-hidden', 'true')
    body.classList.add('no-scroll')
    modal.setAttribute('tabindex', '0')

    let nom = document.getElementById('name').value
    let prenom = document.getElementById('firstname').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value
    form.checkValidity()
}

//Fermeture Modale
const closeModal = () => {
    modalBg.style.display = 'none'
}

export { displayModal }
