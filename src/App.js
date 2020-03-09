import React, { useState } from 'react';
import './App.css';
import PetComponent from './components/PetComponent';
import Messages_pets from './components/Messages_pets';


const name = "Andrew";
// App can receive a prop from the file: index.js !
// then change the line App to App(props)


const pets_ara = [
  { species: 'Dingo',   noise: 'noise awooooo',       color: 'darkorange' },
  { species: 'Turtle',  noise: 'noise eating grapes', color: 'olive' },
  { species: 'Penguin', noise: 'noise kikiki',        color: 'yellow' }
];



function App()  {
  
  const [messages_ara, setMessages_ara] = useState(['Starting messages !']);
  
  function makePets() {
  
    const response_pets_ara = [];
    let j = 10;
  
    for (let pet of pets_ara) {
      response_pets_ara.push(
        <PetComponent
          key={j}
          species={pet.species} 
          noise={pet.noise}
          color={pet.color}
          infoToParent={ petInfoFromChild }
        />
      );
      j++;
    }
    console.log(response_pets_ara);
    return response_pets_ara;
  }


  const petInfoFromChild = info => {
    console.log( info );
    console.log('=> Function in App component.' );
    setMessages_ara([...messages_ara, info ]);
  }

  
    return (
      <div>

        <h2>&nbsp;&nbsp; Welcome to {name}'s petshop !</h2>

        <hr />

        <Messages_pets message_to_display={ messages_ara } />
        

        {/* *** way 1 *** */}
        <p> * way 1 *</p>

        <PetComponent species='Dingo' noise='noise awooooo' color='darkorange' infoToParent={ petInfoFromChild }/>
        <PetComponent species='Turtle' noise='noise eating grapes'color='olive' infoToParent={ petInfoFromChild }/>
        <PetComponent 
          species='Penguin' 
          noise='noise kikiki' 
          color='yellow'
          infoToParent={ petInfoFromChild }
        />

        {/* *** way 2 *** */}
        <p> * way 2 *</p>

        {
          makePets()
        }

        {/* *** way 3 *** */}
        <p> * way 3 *</p>

        {
          pets_ara.map( (pet, i) => 
            <PetComponent 
              key={i}
              species={pet.species} 
              noise={pet.noise}
              color={pet.color}
              infoToParent={ petInfoFromChild }
          />
          )
        }

      </div>
    );
  
} // App ***


export default App;

