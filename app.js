const $gifArea = $('#gif_area');
const $searchInput = $('#submit_search');



function addGiphy(results) {
    //const response = await axios.get('http://api.giphy.com/v1/gifs/search');
    //const results = results.data.length;

    let random = Math.floor(Math.random() * results);
    if (random) {
        let $divCol;
        $divCol = $('<div>');
        let $newGif;
        $newGif = $('<img>');
        src: results.data[random].image.orignal.url,

            $divCol.append($newGif);
        $gifArea.append($divCol);
    }


    $('form').on('submit', async function (e) {
        e.preventDefault();

        // let seachTerm = $searchInput.val();
        // $searchInput.val('');
        // const response = await axios.get('https://api.giphy.com/v1/gifs/search'
        const gif_search = await axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                q: 'searchTerm',
                api_key: 'VaVgtOjzpC7036El6H6nzobBSVcG2u34'
            },
        });

        addGiphy(gif_search.data);
    })

    $('remove').on('click', function () {
        $gifArea.empty();
    });

//await and returns promise(s); get endpoint
//https://developers.giphy.com/docs/api/endpoint

//console.log (search.cheeseburgers);

//console.log ('This line is after axios.get');
//console.log ("Let's get this party started!");