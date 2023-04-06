//Component
import { useEffect, useState } from 'react';

import styles from'./Cards.module.css';
import Card from '../Card/Card.jsx';
import { SearchBar } from '../SearchBar/SearchBar.jsx';
import Loading from '../Loading/Loading';

import store from '../../redux/store';
import styled from 'styled-components';

export default function Cards({ characters, panel, textEmpty, loading}) {
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
      const {list_favorite} = store.getState();
      const listIds = list_favorite.map(({id}) => id);

      setTempChars(characters && characters.map( item => {
         return {
            ...item,
            favorite: listIds.includes(item.id)
         }
      }));
   },[characters])
   return (
      <>
         {
            
            panel &&
            <>
               <SearchBar onSearch={evt => handleSearch(evt,characters)}/>
               <h1 className={styles.titleCards}>Personajes Encontrados</h1> 
            </>
         }
         <div className={styles.listCharacters}>
            {
               loading ?
                  <Loading />
               :
               tempChars && tempChars.length ? 
               tempChars.map( ({id,name,species,gender,image, favorite}) => {
                  const key = Math.floor(Math.random() * Date.now());
                  const options = {
                     name,species,gender,
                     image, key, id, favorite
                  }
                  return <Card {...options}/>
               }) :
               <EmptyElement>
                  {textEmpty ?? 'No hay elementos para mostrar'}
               </EmptyElement>
            }
         </div>
      </>
   );
}

const EmptyElement = styled.h1`
   text-align: center;
   background-color: #f0f0f0;
   padding: 10px;
   border-radius: 10px;
   box-shadow: 0 1px 5px #00000031;
`
