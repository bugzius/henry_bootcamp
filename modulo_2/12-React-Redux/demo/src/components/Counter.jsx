import React, { Component } from 'react';
import store from '../store.js';
import * as actionsCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const Counter = ({ counter, increment, decrement, reset, fetchPost}) => (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
        {' '}
        <button onClick={reset}>
          Reset
        </button>
        <button onClick={() => fetchPost(counter)}>
          Fetch
        </button>
      </p>
    )

const mapStateToProps = (state) => ({
  counter: state.count,
});

function mapDispatchToProps(dispatch) {
  /* return Object.entries(actionsCreators).reduce( (init,[key, value]) => {
    return {...init, [`${key}`]: (payload) => dispatch(value(payload))}
  },{}); */
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);