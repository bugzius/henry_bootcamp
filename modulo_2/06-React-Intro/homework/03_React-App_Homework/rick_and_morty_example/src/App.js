import styles from './App.module.css'
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App () {
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
      <Cards characters={characters}/>
    </div>
  )
}

export default App
