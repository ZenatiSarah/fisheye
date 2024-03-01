const filterMedias = (item, dataArray) => {
    if (item === 'popularite') {
        dataArray.sort(function (a, b) {
            return b.likes - a.likes;
        });
    } else if (item == 'date') {
        dataArray.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    } else if (item == 'titre') {
        dataArray.sort((a, b) => {
            return a.title.localeCompare(b.title);
        })
    } else return
}

export default filterMedias;