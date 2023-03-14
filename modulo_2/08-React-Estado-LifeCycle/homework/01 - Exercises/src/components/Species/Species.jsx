import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid #e1e1e1;
  padding: 5px 10px;
  border-radius: 5px;
  background: #e7e7e7;
  transition: all .3 ease;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover{
    border-color:#bab9b9;
    transform: scale(1.05);
    box-shadow: 0 1px 5px rgba(0,0,0,0.3);
  }
`;

export default function Species ({species, handleSpecies, handleAllSpecies}) {
  return (
    <div>
      <h2>Species</h2>
      {
        species.map( (specie,i) => (
          <Button key={i} onClick={handleSpecies} value={specie}>{specie}</Button>
        ))
      }
      <Button onClick={handleAllSpecies}>All Animals</Button>
    </div>
  )
}
