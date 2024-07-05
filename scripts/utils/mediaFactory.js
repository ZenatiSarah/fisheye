export default class MediaFactory {
    static getMediaTag(media, photographerName, index) {
        let mediaTag = media.image
            ? `<img class="medias" width="320" data-index="${index}" src="./assets/photographers/${photographerName}/${media.image}" alt="image de ${media.image}" />`
            : `<video class="medias" width="320" height="240" data-index="${index}"> <source src="./assets/photographers/${photographerName}/${media.video}" type="video/mp4" ></video>`;
        mediaTag = '<a href="" class="selectableCard">' + mediaTag + '</a>'
        return mediaTag;
    }
}