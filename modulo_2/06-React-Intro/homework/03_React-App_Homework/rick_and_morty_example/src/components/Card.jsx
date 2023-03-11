import './Card.css';

export default function Card(props) {
   const {
      name,
      species,
      gender,
      image,
      onClose
   } = props;
   return (
      <div className='box-card-item'>
         <h1 className='title-name-card'>{name}</h1>
         <img className='img-card-character' src={image} alt={`Image ${name}`}/>
         <div className='over-card'>
            <div className='info-over-card'>
               <p>{species}</p>
               <p>{gender}</p>
            </div>
            <button onClick={onClose} className="btn-card">close</button>
         </div>
      </div>
   );
}
