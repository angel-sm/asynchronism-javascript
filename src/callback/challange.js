const XMLhttpRequest = require('xmlhttprequest').XMLHttpRequest;

const api = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url_api, callback) => {
    const xhttp = new XMLhttpRequest();

    xhttp.open('GET', url_api, true);

    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                return callback(null, JSON.parse(xhttp.responseText))
            }else {
                const error = new Error('Error' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fetchData(api, (error1, data1) => {
    if(error1){
        return console.error(error1)
    }

    fetchData(api+data1.results[0].id, (error2, data2) => {
        if(error2){
            return console.error(error2)
        }

        fetchData(data2.origin.url, (error3, data3) => {
            if(error3){
                return console.error(error3)
            }
            
            console.log(data1.info.count, data2.name, data3.dimension)
        });

    });

});
