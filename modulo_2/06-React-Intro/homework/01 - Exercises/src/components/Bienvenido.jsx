import React from "react";
import { Botones } from './Botones.jsx';

const studentName = "David";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div className="ctn-window">
      <h1 className="main-title">Trabajando Con Componentes!</h1>
      <h3 className="title-student">{studentName}</h3>
      <ul className="list-items">
        {
          techSkills.map( val => {
            const id = Math.floor(Math.random() * Date.now());
            return (
              <li className="item-list" key={id} id={id}>{val}</li>
            )
          })
        }
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
