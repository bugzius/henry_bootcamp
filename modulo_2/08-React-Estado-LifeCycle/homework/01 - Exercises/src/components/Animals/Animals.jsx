import React from 'react'
import styled from 'styled-components'

const AnimalCard = styled.div`
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  background: #bebec2;
  padding: 0;
  border-radius:5px;
  overflow: hidden;
  box-shadow: 0 1px 7px rgba(0,0,0,0.3);

  & img{
    object-fit: cover;
    width: 100%;
    filter: grayscale(.4);
    transition: all .3s ease;
    &:hover{
      transform: scale(1.1);
      filter: grayscale(0) contrast(1.5);
    }
  }

  & .title-card-animal{
    background: #31ff2a;
    padding: 5px;
    z-index: 1;
  }
  & .category-card-animal{
    padding: 5px 10px;
    font-size: .9rem;
    z-index: 1;
    background: inherit;
  }
`;

const AnimalsDivStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
`;

export default class Animals extends React.Component {

  render () {
    return (
      <AnimalsDivStyled>
        {
          this.props.animals.map( ({name,specie,image}, i) => {
            return (
              <AnimalCard key={i}>
                <h5 className={"title-card-animal"} >{name}</h5>
                <img src={image} alt={`image ${name}`}/>
                <span className={"category-card-animal"} >{specie}</span>
              </AnimalCard>
            )
          })
        }
      </AnimalsDivStyled>
    )
  }
}
