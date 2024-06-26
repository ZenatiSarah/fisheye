const slides = (medias) => {
    const mediaProvider = Array.from(document.querySelectorAll('.mediasCard img, .mediasCard video'));
    mediaProvider.forEach(media => {
        media.addEventListener("click", () => {
            console.log(medias);
            const mediaId = medias.findIndex(function (element) {
                return element.id == mediaId;
            });
            console.log(mediaId)
        })
    });
};


export default slides
