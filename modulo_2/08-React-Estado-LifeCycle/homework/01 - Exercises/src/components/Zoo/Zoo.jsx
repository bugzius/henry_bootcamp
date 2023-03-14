import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';

import ZooStyles from './Zoo.module.css';

export default function Zoo() {
   const [zoo, setZoo] = React.useState({
      zooName: "-",
      animals: "",
      species: "",
      allAnimals:""
   });
   const handleInputChange = e => {
      const zooName = e.target.value.slice(0,15);
      setZoo({...zoo,zooName});
   };
   /* Escribe acá tu código */
   return (
      <div>
         <label>Zoo Name:</label>
         <input onChange={handleInputChange} value={zoo.zooName}/>
         <h1>{zoo.zooName}</h1>
      </div>
   );
}
