import React from 'react';

class SearchBar extends React.Component{
   render(){
      return(
         <>
            <form onSubmit={this.props.onSearch}>
               <h1>Busca tu personaje!</h1>
               <input type="text" name="name-character" placeholder='Nombre de Personaje'/>
               <input type="submit" value="Buscar" />
            </form>
         </>
      )
   }
}

export default SearchBar;