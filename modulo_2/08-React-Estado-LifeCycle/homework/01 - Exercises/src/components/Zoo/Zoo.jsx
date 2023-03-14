import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';

import ZooStyles from './Zoo.module.css';

export default function Zoo() {
   const [zoo, setZoo] = React.useState({
      zooName: "",
      animals: [],
      species: [],
      allAnimals:[]
   });
   const handleInputChange = e => {
      const zooName = e.target.value.slice(0,15);
      setZoo({...zoo,zooName});
   };
   //Use effect se va a ejecutar 1 vez y estará escuchando por los argumentos en el array cada vez que cambien ejecutará el useEffect
   React.useEffect(() => {
      //Get zoo
      fetch('http://localhost:3001/zoo')
         .then( res => res.json())
         .then(({animals, species}) => {
            setZoo({
               ...zoo,
               animals,
               species,
               allAnimals: animals
            })
         })
         .catch(console.log);
   }, [])

   const handleSpecies = e => {
      const value = e.target.value;
      setZoo({
         ...zoo,
         animals: zoo.allAnimals.filter( ({specie}) => specie === value)
      })
   }
   const handleAllSpecies = () => {
      setZoo({...zoo, animals:zoo.allAnimals});
   }
   /* Escribe acá tu código */
   return (
      <div className={ZooStyles.divBienvenido}>
         <label>Zoo Name:</label>
         <input className={ZooStyles.input} onChange={handleInputChange} placeholder="Establece un Titulo" value={zoo.zooName || ""}/>
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} handleAllSpecies={handleAllSpecies} handleSpecies={handleSpecies} />
         <Animals animals={zoo.animals}/>
      </div>
   );
}
