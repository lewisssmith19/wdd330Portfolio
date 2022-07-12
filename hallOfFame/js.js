// const requestURL = 'https://gist.github.com/lewisssmith19/e2d7a6484ee69eb70bcb4af5d8c7406f.js';
// let players = document.querySelector('.players'); 
// const TempURL = './halloffame.json';
const jsonData = require('./halloffame.json'); 
console.log(jsonData);
fetch(TempURL)
  .then(function (response) {
    console.log(response)
    return response();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    const players = jsonObject['players'];
    players.forEach(displayPlayers); 
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