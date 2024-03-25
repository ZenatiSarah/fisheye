const displayTotalLikes = (medias, like) => {

    const allBtnLike = document.querySelectorAll('.btn-like');
    //const likesElement = document.querySelector(".photographer_likes_count");

    let totalLikes = medias.reduce((accumulator, medias) =>
        accumulator + medias.likes, 0);

    console.log(totalLikes)
    /*
    const addLikes = (item) => {
        return item + 1
    }
    const removeLikes = (item) => {
        return item - 1
    }*/


    allBtnLike.forEach((btnLike, index) => {
        //console.log("index de like :", index)
        let etatInital = false;
        let itemLike = medias[index].likes;

        btnLike.addEventListener('click', () => {
            etatInital = !etatInital;

            if (etatInital) {
                itemLike++
                totalLikes++
            } else {
                itemLike--
                totalLikes--
            }

        });

    });

    return { itemLike, totalLikes, index, etatInital }
}
export default displayTotalLikes;