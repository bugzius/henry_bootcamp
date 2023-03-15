import './Cards.css';
import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className='list-characters'>
         {
            characters.map( ({name,species,gender,image, onClose}) => {
               const key = Math.floor(Math.random() * Date.now());
               const options = {
                  name,species,gender,
                  image,onClose, key
               }
               return <Card {...options}/>
            })
         }
      </div>
   );
}
