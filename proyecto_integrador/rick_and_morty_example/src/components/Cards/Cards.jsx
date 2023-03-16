import styles from'./Cards.module.css';
import Card from '../Card/Card.jsx';
import { SearchBar } from '../SearchBar/SearchBar.jsx';

import { useEffect, useState } from 'react';

export function Cards({ fetchPageNumber }) {
   const URLApi = 'https://rickandmortyapi.com/api/character';

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
         <SearchBar onSearch={evt => handleSearch(evt,tempChars)}/>
         <div className={styles.listCharacters}>
            {
               tempChars ?
               tempChars.map( ({name,species,gender,image}) => {
                  const key = Math.floor(Math.random() * Date.now());
                  const options = {
                     name,species,gender,
                     image, key
                  }
                  return <Card {...options}/>
               }) : null
            }
         </div>
      </>
   );
}
