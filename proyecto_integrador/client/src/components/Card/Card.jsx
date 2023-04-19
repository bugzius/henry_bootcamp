//Component
import styles from './Card.module.css';
import styled from 'styled-components';

import imageLazyLoadingCard from '../../resources/lazy_loading_card.jpg';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Card(character) {
   const { id,name,species,gender,image,variant, addCharacterFavorite, removeCharacterFavorite, favorite } = character;

   const [imageResource, setImageResource] = useState(imageLazyLoadingCard);
   const [stateFavorite, setStateFavorite] = useState(favorite);
   /* Fetch to URL image in the setState */
   useEffect(() => {
      fetch(image)
         .then(res => res.blob())
         .then(imageBlob => setImageResource(URL.createObjectURL(imageBlob)));
   },[]);

   const handleClick = () => {
      
      setStateFavorite((p) => {
         //Validate state
         if(!p){addCharacterFavorite(character)}
         else{
            removeCharacterFavorite(id)
         }
         
         //return state to
         return !p
      })
   };

   return (
      <div className={`${styles.boxCardItem}`}>
         <NavLink className={styles.NavLinkStyles} to={`/characters/${id}`}>
            <h1 className={styles.titleNameCard}>{name}</h1>
            <img className={styles.imgCardCharacter} src={imageResource} alt={`character ${name}`}/>
            <div className={styles.overCard}>
               <div>
                  <p>{species}</p>
                  <p>{gender}</p>
               </div>
               <Button>Abrir</Button>
            </div>
         </NavLink>
         {
            variant !== "banner" &&
               <div className={`${styles.iconFavoriteToggle} ${stateFavorite && styles.active}`}>
                  <FontAwesomeIcon onClick={handleClick} icon={faHeart} />
               </div>
         }
      </div>
   );
}

const Button = styled.button`
   border: none;
   outline: none;
   padding: 5px 10px;
   border-radius: 5px;
   cursor: pointer;

   box-shadow: 0 1px 5px rgba(0,0,0,0.3);
   font-weight: bold;
   padding: 5px 18px;
   font-size: 1.2rem;
   transition: all .4s ease;

   &:hover{
      background: rgb(229, 93, 8);
      color: white;
      box-shadow: 0 1px 15px rgba(255, 0, 0, 0.4);
      transform: scale(1.04);
   }
`;

export default Card;
