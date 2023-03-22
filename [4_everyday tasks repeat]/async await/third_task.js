

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const dataContainer = document.querySelector('.data-container');

const createListItem = (text) => {
    const listItem = document.createElement('li');

    listItem.textContent = text;

    return listItem
}
const renderAlbums = async () => {
    const response = await fetch(ALBUMS_URL);
    console.log(response);
    if (!response.ok) {
        throw new Error('нууууууу камончики');
    }
    const results = await response.json();

    results.forEach(result => {
         const resultHTML = createListItem(result.title);
        dataContainer.append(resultHTML)
    }) ;

}

renderAlbums();