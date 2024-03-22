const displayTotalLikes = (medias) => {

    const allBtnLike = document.querySelectorAll('.btn-like');
    //const likesElement = document.querySelector(".photographer_likes_count");


    let totalLikes = medias.reduce((accumulator, medias) =>
        accumulator + medias.likes, 0);

    allBtnLike.forEach((btnLike, index) => {

        let etatInital = false;
        let itemLike = medias[index].likes;
        btnLike.addEventListener('click', () => {
            etatInital = !etatInital;

            if (etatInital) {

                itemLike++;
                totalLikes++;
            } else {
                itemLike--;
                totalLikes--;
            }
        })
    })

}
export default displayTotalLikes;