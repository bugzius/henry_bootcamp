import {Navigate} from 'react-router-dom';

import { Rick, AntennaMorty, BlimBlam, JerryMytholog } from '../../data.js';
import styles from './Home.module.css'

import Card from '../Card/Card.jsx';
import Banner from '../Banner/Banner.jsx';

import { hashSession } from '../../VariablesENV.js';
import styled from 'styled-components';

function Home (){
  const session = sessionStorage.getItem(hashSession) ?? null;

  return (
    <div >
      {
        !session && <Navigate replace to='/login' />
      }
      
      <Banner idHref="initial_page"/>
      <TitleSectionCharacters>Los Elegidos</TitleSectionCharacters>
      <div id='initial_page' className={styles.Home} style={{padding:"10px"}}>
        <Card {...Rick} variant="banner"/>
        <Card {...AntennaMorty} variant="banner"/>
        <Card {...BlimBlam} variant="banner"/>
        <Card {...JerryMytholog} variant="banner"/>
      </div>
    </div>
  )
}

const TitleSectionCharacters = styled.h1`
  text-align: center;
  padding: 10px;
  border-top: 10px solid #00bbff;
`

export default Home