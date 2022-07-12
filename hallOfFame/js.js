const requestURL = 'https://gist.github.com/lewisssmith19/e2d7a6484ee69eb70bcb4af5d8c7406f';
// const TempURL = './halloffame2.json';
let players = document.querySelector('.players'); 
// const jsonData = ('./halloffame.json'); 
// console.log(jsonData);
fetch(requestURL)
  .then(function (response) {
    return response();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const dude = jsonObject['players'];
    dude.forEach(displayPlayers); 
  });
  

  

  function displayPlayers(player) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    let bio = document.createElement('bio');
    let heightWeight = document.createElement('heightWeight');
    let a = document.createElement('a');
    let portrait = document.createElement('img');
  
    
    h2.textContent = player.name;
    bio.textContent = player.bio; 
    heightWeight.textContent = player.heigtWeight;
    a.textContent = player.website;
    a.setAttribute('target', '_blank');
  
    
    portrait.setAttribute('src', player.image);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('alt', 'images');
    card.appendChild(h2);
    card.appendChild(img);
  
    card.appendChild(heightWeight);
    card.appendChild(bio);
    card.appendChild(a);
   

  
    players.appendChild(card);

  } 
  // <script src="https://gist.github.com/lewisssmith19/e2d7a6484ee69eb70bcb4af5d8c7406f.js"></script>
  // https://gist.github.com/lewisssmith19/e2d7a6484ee69eb70bcb4af5d8c7406f


  // https://gist.github.com/lewisssmith19/e2d7a6484ee69eb70bcb4af5d8c7406f.js