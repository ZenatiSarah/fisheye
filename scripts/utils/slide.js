const slides = (medias) => {
    const mediaProvider = Array.from(document.querySelectorAll('.mediasCard img, .mediasCard video'));
    mediaProvider.forEach(media => {
        media.addEventListener("click", (e) => {
            e.preventDefault();
            const mediaId = medias.findIndex(function (element) {
                return element.id == mediaId;
            });
        })
    });
};


export default slides
