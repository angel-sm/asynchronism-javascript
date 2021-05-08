const XMLhttpRequest = require('xmlhttprequest').XMLHttpRequest;

const api = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url_api) => {
    const xhttp = new XMLhttpRequest();

    return new Promise((resolve, reject) => {
        xhttp.open('GET', url_api, true);

        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolve( JSON.parse(xhttp.responseText))
                }else {
                    const error = new Error('Error' + url_api);
                    reject(error, null)
                }
            }
        })
        xhttp.send();
    })
}

fetchData(api)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${api}${data.resoult[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(error => {
        console.log(error);
    })