async function addGiphy () {
  const response = await axios.get ('http://api.giphy.com/v1/gifs/search');
  const {results} = res.data.length;

  let random = Math.floor (Math.random () * results);
}
console.log ('I happen after addGiphy()');
//await and returns promise(s); get endpoint
//https://developers.giphy.com/docs/api/endpoint
// const gif_search = await axios.get ('http://api.giphy.com/v1/gifs/search', {
//   params: {
//     q: 'searchTerm',
//     api_key: 'VaVgtOjzpC7036El6H6nzobBSVcG2u34',
//   },
// });
//console.log (search.cheeseburgers);

//console.log ('This line is after axios.get');
//console.log ("Let's get this party started!");
