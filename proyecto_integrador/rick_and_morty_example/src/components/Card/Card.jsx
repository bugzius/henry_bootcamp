import styles from './Card.module.css';
import styled from 'styled-components';

import imageLazyLoadingCard from '../../resources/lazy_loading_card.jpg';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

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

export default function Card({id,name,species,gender,image,variant}) {
   
   const [imageResource, setImageResource] = useState(imageLazyLoadingCard);
   
   /* Fetch to URL image in the setState */
   useEffect(() => {
      fetch(image)
         .then(res => res.blob())
         .then(imageBlob => setImageResource(URL.createObjectURL(imageBlob)));
   },[image]);

   return (
      <NavLink to={`/characters/${id}`} className={`${styles.boxCardItem} ${variant === "banner"? styles.bannerCard : null}`}>
         <h1 className={styles.titleNameCard}>{name}</h1>
         <img className={styles.imgCardCharacter} src={imageResource} alt={`Image ${name}`}/>
         <div className={styles.overCard}>
            <div>
               <p>{species}</p>
               <p>{gender}</p>
            </div>
            <Button>Abrir</Button>
         </div>
      </NavLink>
   );
}
