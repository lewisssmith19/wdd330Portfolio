const requestURL = 'https://gist.github.com/lewisssmith19/e2d7a6484ee69eb70bcb4af5d8c7406f.js';
let players = document.querySelector('.players'); 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companys = jsonObject['players'];
    companys.forEach(displayPlayers); 
  });
  

  

  function displayPlayers(company) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    let bio = document.createElement('bio');
    let heightWeight = document.createElement('heightWeight');
    let a = document.createElement('a');
    let portrait = document.createElement('img');
  
    
    h2.textContent = company.name;
    bio.textContent = company.bio; 
    heightWeight.textContent = company.heigtWeight;
    a.textContent = company.website;
    a.setAttribute('target', '_blank');
  
    
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('alt', 'images');
    card.appendChild(h2);
    card.appendChild(portrait);
  
    card.appendChild(heightWeight);
    card.appendChild(bio);
    card.appendChild(a);
   

  
    players.appendChild(card);

  }