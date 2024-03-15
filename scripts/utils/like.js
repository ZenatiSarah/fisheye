/**
 * Récupération des datas de mon photographe
 * Récupération de mon bouton like
 * Créer une variable avec le nombre total de like 
 */


const displayTotalLikes = (medias) => {
    const itemLike = document.getElementById('like');
    const allBtnLike = document.querySelectorAll('.btn-like');
    //const likesElement = document.querySelector(".photographer_likes_count");

    const updateTotalLikes = () => {
        let initialValue = 0;
        let totalLikes = medias.reduce((accumulator, medias) =>
            accumulator + medias.likes, initialValue
        );
        console.log("total des likes : ", totalLikes)
        //likesElement.textContent = `${totalLikes}`; afficher le total des likes sur le dom
    }
    updateTotalLikes();

    allBtnLike.forEach(btnLike => {
        let etatInital = false;
        btnLike.addEventListener('click', () => {
            /**
             * récupérer les médias pour récupérer les likes
             * Ajouter + 1 au nombre de like 
             * Si btn a l'état liké = déliké et inversement
             * 
             * 
             */


            etatInital = true;

            if (etatInital == true) {
                console.log("Btn liké !")


            }


            updateTotalLikes();
        })
    })

}
export default displayTotalLikes;