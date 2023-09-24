const getCatAPI = async () => {

    const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?api_key=live_96mbSquof1IrEzoBi4ssU1BbI71VOawb0Blcy7MALcWQHma5IENwEdCDnfX8m7oh&limit=50',
        {
            method: 'GET',
            mode: 'cors'
        }
    );
    const catsData = await response.json();
    console.log(catsData);
    // const userResult = [...usersData.result];
    const data = {};
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('card', 'col', 'col-sm-12', 'col-lg-4', 'row');
    catsData.forEach(element => {
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('d-flex', 'justify-content-between', 'card');
        const catPhoto = document.createElement('img');
        catPhoto.setAttribute('src', element.url);

        cardWrapper.appendChild(catPhoto);
        divWrapper.appendChild(cardWrapper);
    });
    const mainContent = document.querySelector("section");

    mainContent.appendChild(divWrapper);
}
getCatAPI();