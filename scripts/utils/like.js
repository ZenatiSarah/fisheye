const displayTotalLikes = (medias) => {

    const allBtnLike = document.querySelectorAll('.btn-like');

    let totalLikes = medias.reduce((accumulator, medias) =>
        accumulator + medias.likes, 0);

    allBtnLike.forEach((btnLike, index) => {
        let etatInital = false;
        let itemLike = medias[index].likes;

        btnLike.addEventListener('click', () => {
            etatInital = !etatInital;

            if (etatInital) {
                itemLike++
                document.getElementById("like" + index).innerHTML = itemLike;
                totalLikes++
                document.getElementById("likes").innerHTML = totalLikes;

            } else {
                itemLike--
                document.getElementById("like" + index).innerHTML = itemLike;
                totalLikes--
                document.getElementById("likes").innerHTML = totalLikes;

            }

        });

    });

}
export default displayTotalLikes;