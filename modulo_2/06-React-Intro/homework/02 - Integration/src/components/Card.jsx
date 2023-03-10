export default function Card(props) {
   const {
      name,
      species,
      gender,
      image,
      onClose
   } = props;
   return (
      <div>
         <h1>{name}</h1>
         <p>{species}</p>
         <p>{gender}</p>
         <img src={image} alt={`Image ${name}`}/>
         <button onClick={onClose} className="btn-card">X</button>
      </div>
   );
}
