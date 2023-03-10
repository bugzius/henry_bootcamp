import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      characters.map( ({name,species,gender,image, onClose}) => {
         const key = Math.floor(Math.random() * Date.now());
         const obj = {
            name,species,gender,
            image,onClose, key
         }
         return <Card {...obj}/>
      })
   );
}
