async function getLaunches () {
  const res = await axios.get (
    'https://api.spacexdata.com/v3/launches/upcoming'
  );
  renderLaunches (res.data);

  //console.log (res.data);
}

function renderLaunches (launches) {
  const ul = document.querySelector ('#launches');
  //   for (let launch of res.data) {
  for (let launch of launches) {
    ul.append (makeLaunchLI (launch));
    // console.log (launch.mission_name);
    // console.log (launch.rocket.rocket_name);
  }
}

function makeLaunchLI (launch) {
  const newLi = document.createElement ('LI');
  const mission = document.createElement ('B');
  mission.innerText = launch.mission_name;
  // newLi.innerHTML = launch.mission_name;
  newLi.append (mission);
  newLi.innerHTML += ` - ${launch.rocket.rocket_name}`;
  return newLi;
}

const button = document.querySelector ('#geLaunches');
button.addEventListener ('click', getLaunches);
