// function getData () {

async function addGiphy () {
  $ ('form').on ('submit', async function (e) {
    e.preventDefault ();
    let searchTerm = $searchInput.val ();
    $searchInput.val ('');

    //await and returns promise(s); get endpoint
    //https://developers.giphy.com/docs/api/endpoint
    const gif_search = await axios.get ('api.giphy.com/v1/gifs/search', {
      params: {
        q: searchTerm,
        api_key: 'VaVgtOjzpC7036El6H6nzobBSVcG2u34',
      },
    });
  });
  //console.log ('This line is after axios.get');
  //console.log ("Let's get this party started!");
}
