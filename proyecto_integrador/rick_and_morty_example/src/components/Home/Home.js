import styles from './Home.module.css'
import Card from '../Card/Card.jsx';
import { Rick } from '../../data.js';

function Home () {
  return (
    <div className={styles.App} style={{ padding: '25px' }}>
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
