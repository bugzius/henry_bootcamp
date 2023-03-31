import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../../redux/actions/actions';
import './card.css';

export class Card extends React.Component{
   constructor(props){
      super(props)
   }

   handleDelete(id){
      this.props.deleteProduct(id);
   };
   render(){
      return (
         <div className='cardBg'>
            <h5>{this.props.name}: </h5>
            <h5>${this.props.price}</h5>
            <button onClick={() => this.handleDelete(this.props.id)} className='cardBtn'>X</button>
         </div>
      )
   };
};

export function mapDispatchToProps(dispatch) {
   return {
      deleteProduct: id => dispatch(deleteProduct(id))
   }
}

export default connect(null, mapDispatchToProps)(Card);
