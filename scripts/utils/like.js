/**
 * Récupération des datas de mon photographe
 * Récupération de mon bouton like
 * Créer une variable avec le nombre total de like 
 */


const displayTotalLikes = (medias) => {

    const allBtnLike = document.querySelectorAll('.btn-like');
    //const likesElement = document.querySelector(".photographer_likes_count");


    let totalLikes = medias.reduce((accumulator, medias) =>
        accumulator + medias.likes, 0);
    console.log("total des likes : ", totalLikes)

    allBtnLike.forEach((btnLike, index) => {

        let etatInital = false;
        let itemLike = medias[index].likes;
        btnLike.addEventListener('click', () => {
            etatInital = !etatInital;
            console.log(etatInital);

            if (etatInital) {

                itemLike++;
                console.log(itemLike)
                totalLikes++;
                console.log(totalLikes);
            } else {
                itemLike--;
                console.log(itemLike)
                totalLikes--;
                console.log(totalLikes);
            }
        })
    })

}
export default displayTotalLikes;