import styles from './Home.module.css'
import Card from '../Card/Card.jsx';
import Cards from '../Cards/Cards.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import characters, { Rick } from '../../data.js';

function Home () {
  return (
    <div className={styles.App} style={{ padding: '25px' }}>
      <div>
        <SearchBar
          onSearch={
            (event) => {
              event.preventDefault();
              const valSearching = event.target['name-character'].value.trim().toLowerCase();
              if(!valSearching){
                alert('Debes de Ingresar un Valor');
                return;
              };

              const filteredCharacters = characters.filter((value) => {
                return value.name.toLowerCase().includes(valSearching);
              });

              if(filteredCharacters.length > 0){
                alert(JSON.stringify([...filteredCharacters]));
                return;
              }

              alert('No dimos con tu busqueda,Intenta con otra...');
            }
          }
        />
      </div>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
          variant="banner"
        />
      </div>
    </div>
  )
}

export default Home
