import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/students')
      .then(res => res.text())
      .then(data => setStudents(JSON.parse(data).students))
      .catch(err => {
        console.log('cagó');
      });
  },[]);

  return (
    <div>
      <h1>Lista de Estudiantes</h1>
      {
        students.length && students.map(student => (
          <UserCard key={student.id} {...student} />
        ))
      }
    </div>
  )
}

export default App
