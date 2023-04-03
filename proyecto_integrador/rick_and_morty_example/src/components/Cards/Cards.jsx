//Component
import { useEffect, useState } from 'react';

import styles from'./Cards.module.css';
import Card from '../Card/Card.jsx';
import { SearchBar } from '../SearchBar/SearchBar.jsx';
import store from '../../redux/store';

export default function Cards({ characters }) {
   const {list_favorite} = store.getState();
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
      setTempChars(characters.map( item => {
         return {
            ...item,
            favorite: list_favorite.includes(item.id)
         }
      }));
   },[characters])

   return (
      <>
         <h1 className={styles.titleCards}>Personajes Encontrados</h1> 
         <SearchBar onSearch={evt => handleSearch(evt,characters)}/>
         <div className={styles.listCharacters}>
            {
               tempChars &&
               tempChars.map( ({id,name,species,gender,image, favorite}) => {
                  const key = Math.floor(Math.random() * Date.now());
                  const options = {
                     name,species,gender,
                     image, key, id, favorite
                  }
                  return <Card {...options}/>
               })
            }
         </div>
      </>
   );
}