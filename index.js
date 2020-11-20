const character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: {
        name: 'Earth (Replacement Dimension)',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

/*
  <div id="container-card">
       <div class="header"></div>
            <div id= "nombre">Ricky Sanchez</div>
            <div id="status">Alive</div>
        </div>
        <div id="imagen-character">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Ricky" sizes="500px">
        </div>
        <div class="footer"> 
            <div id="species">Human</div>
            <div id="Gender">Male</div>
        </div>
        <div id="location">Earth (C-137)</div>
    </div>
    */


function paintCard(element, character) {
    element.innerHTML =
        `
        <div class="header">
             <div id= "nombre">${character.name}</div>
             <div id="status">${character.status}</div>
         </div>
         <div id="imagen-character">
             <img src=${character.image} alt="Ricky" sizes="500px">
         </div>
         <div class="footer"> 
             <div id="species">${character.species}</div>
             <div id="Gender">${character.gender}</div>
         </div>
         <div id="location">${character.location.name}</div>
        `;
};


const containerCard = document.querySelector('#container-card');
console.log(containerCard)
paintCard(containerCard, character)