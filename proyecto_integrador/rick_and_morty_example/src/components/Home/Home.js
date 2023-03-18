import {Navigate} from 'react-router-dom';

import { Rick } from '../../data.js';
import styles from './Home.module.css'
import Card from '../Card/Card.jsx';

import { hashSession } from '../../VariablesENV.js';

function Home () {
  const session = sessionStorage.getItem(hashSession) ?? null
  return (
    <div className={styles.Home} style={{ padding: '25px' }}>
      {
        !session && <Navigate replace to='/login' />
      }
      
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
          variant="banner"
          id={Rick.id}
        />
      </div>
    </div>
  )
}

export default Home
