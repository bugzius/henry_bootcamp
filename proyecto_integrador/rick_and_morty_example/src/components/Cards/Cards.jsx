import { useEffect, useState } from 'react';

import styles from'./Cards.module.css';
import Card from '../Card/Card.jsx';
import { SearchBar } from '../SearchBar/SearchBar.jsx';

import { BaseURLApi } from '../../VariablesENV.js';

export function Cards({ fetchPageNumber }) {
   const URLApi = BaseURLApi;

   const [characters, setCharacters] = useState([]);
   const [tempChars, setTempChars] = useState(characters);
   
   const handleSearch = (event,persons) => {
      event.preventDefault();
      const textInput = event.target['name-character'];

      const valSearching = textInput.value.trim().toLowerCase();

      if(!valSearching){
         alert('Debes de Ingresar un Valor');
         return;
      };
      
      const filteredCharacters = persons.filter((value) => {
         return value.name.toLowerCase().includes(valSearching);
      });

      if(filteredCharacters.length === 0){
         alert('No dimos con tu busqueda,Intenta con otra...');
         return;
      };
      textInput.value = "";
      setTempChars(filteredCharacters);
   };

   useEffect(() => {
      fetch(`${URLApi}?page=${fetchPageNumber}`)
         .then(res => res.json())
         .then(({results}) => {
            window.scroll({top:0});
            
            setCharacters(results);
            setTempChars(results);
         });
   },[fetchPageNumber]);

   return (
      <>
         <h1 className={styles.titleCards}>Personajes Encontrados</h1> 
         <SearchBar onSearch={evt => handleSearch(evt,characters)}/>
         <div className={styles.listCharacters}>
            {
               tempChars &&
               tempChars.map( ({id,name,species,gender,image}) => {
                  const key = Math.floor(Math.random() * Date.now());
                  const options = {
                     name,species,gender,
                     image, key, id
                  }
                  return <Card {...options}/>
               })
            }
         </div>
      </>
   );
}
