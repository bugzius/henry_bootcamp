import styles from'./Cards.module.css';
import Card from '../Card/Card.jsx';
import { useEffect, useState } from 'react';

export function Cards({ fetchPageNumber }) {
   const URLApi = 'https://rickandmortyapi.com/api/character'

   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      fetch(`${URLApi}?page=${fetchPageNumber}`)
         .then(res => res.json())
         .then(({results}) => {
            window.scroll({top:0});
            
            setCharacters(results)
         });
   },[fetchPageNumber]);

   return (
      <>
         <h1 className={styles.titleCards}>Personajes Encontrados</h1>
         <div className={styles.listCharacters}>
            {
               characters ?
               characters.map( ({name,species,gender,image}) => {
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
