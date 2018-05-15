 
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
import { bindActionCreators } from 'redux'; /* code change */

 
class App extends Component {
 
  handleOnClick() {
    this.props.addItem();
  }
 
  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};
 
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};
 
const mapDispatchToProps = (dispatch) => {
  /* code change */
  return bindActionCreators({
    addItem: addItem
  }, dispatch);
};
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
