import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
   background: #f0f0f0;
   border-radius: 15px;
   padding: 10px;
   box-shadow: 0 1px 10px rgba(0,0,0,0.3);
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   align-items: center;
   gap: 5px;
   & input[name="name-character"]{
      border: none;
      outline: none;
      padding: 5px 7px;
      font-size: 1.2rem;
      box-shadow: 0 1px 10px rgba(0,0,0,0.3);
      border-radius: 10px;
   }
   & input[type="submit"]{
      border: none;
      padding: 5px;
      border-radius: 10px;
      font-size: 1.1rem;
      background-color: rgb();
      background: linear-gradient(0.5turn, rgba(0, 85, 255, 0.8) 30%, rgba(0, 0, 0, 0.2) 70%, rgba(255, 255, 255, 0.6) 100%);
      font-weight: bold;
      color: white;
      cursor: pointer;
      transition: all .3s ease;
      &:hover{
         box-shadow: 0 2px 10px rgba(0,0,0,0.3);
         transform: scale(1.05);
      }
   }
`;

class SearchBar extends React.Component{
   render(){
      return(
         <>
            <FormStyled onSubmit={this.props.onSearch}>
               <h1>Busca tu personaje!</h1>
               <input type="text" name="name-character" placeholder='Nombre de Personaje'/>
               <input type="submit" value="Buscar" />
            </FormStyled>
         </>
      )
   }
}

export default SearchBar;