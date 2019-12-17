import React from 'react';
import ItemCount from './components/ItemCount';
import Buttons from './components/Buttons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
      items: []
    }
    this.modifyItemCount = this.modifyItemCount.bind(this)
    this.addItemCount = this.addItemCount.bind(this)
    this.substractItemCount = this.substractItemCount.bind(this)
  }

  modifyItemCount(quantity) {
    this.setState(prevState => ({
      itemCount: prevState.itemCount + quantity
    }))
  }

  addItemCount(event) {
    this.modifyItemCount(1)
  }

  substractItemCount(event) {
    this.modifyItemCount(-1)
  }

  render () {
    return (
      <>
        <ItemCount quantity={this.state.itemCount}/>
        <Buttons addItem={this.addItemCount} removeItem={this.substractItemCount}/>
      </>
    );
  }
}

export default App;
