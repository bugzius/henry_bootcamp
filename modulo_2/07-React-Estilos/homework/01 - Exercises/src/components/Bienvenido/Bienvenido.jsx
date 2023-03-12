import React from 'react'
import Botones from '../Botones/Botones.jsx'

//Images
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.svg'
import javascriptImg from '../../assets/javascript.png'
import reactImg from '../../assets/react.png'
import redux from '../../assets/redux.png'

import styles from './Bienvenido.module.css'

import {generatorKey} from '../../generateKey.js';

const studentName = 'David Bulla .dev';

const techSkills = [
  { 
    tech: 'Html',
    keyValue: generatorKey(),
    image: htmlImg
  },
  { 
    tech: 'Css',
    keyValue: generatorKey(),
    image: cssImg
  },
  { 
    tech: 'JavaScript',
    keyValue: generatorKey(), 
    image: javascriptImg
  },
  { 
    tech: 'React',
    keyValue: generatorKey(), 
    image: reactImg
  },
  { 
    tech: 'Redux',
    keyValue: generatorKey() ,
    image: redux
  }
];

const alerts = { m1: 'Aprobado', m2: 'En curso' };

export default function Bienvenido () {
  const h1Styles = {
    textDecoration: "underline"
  };

  return (
    <div className={styles.divBienvenido}>
      <h1 style={h1Styles} className={styles.title}>Mis tecnologías</h1>
      <h3 className={styles.subtitle}>{studentName}</h3>
      <ul className={styles.unorderedList}>
        {
          techSkills.map(skill => (
            <li className={styles.listItem} key={skill.keyValue}>
              <img src={skill.image} alt={skill.tech} />
              <p>{skill.tech}</p>
            </li>
          ))
        }
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

export { studentName, techSkills, alerts }
