import React from 'react';
import ItemCount from './components/ItemCount';
import Items from './components/Items';
import ItemAdder from './components/ItemAdder'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newItem: '',
      items: [{id:0, value:'test1'}, {id:1, value:'test2'}],
      addingItem: true
    }
  }

  OnChangeNewItemValue = event => {
    this.setState({newItem: event.target.value})
  }

  OnRemoveItem = itemID => {
    this.setState(state => ({
        items: state.items.filter(anItem => itemID !== anItem.id)
      }));
  }

  OnAddNewItem = (event) => {
    event.preventDefault();

    this.setState(state => ({
      items: state.items.concat({
        id: state.items.length,
        value: state.newItem
      }) 
    }));
  }

  render () {
    return (
      <>
        <ItemCount quantity={this.state.items.length}/>
        <Items items={this.state.items} removeItem={this.OnRemoveItem}/>
        {this.state.addingItem ? <ItemAdder item={this.state.newItem} addItem={this.OnAddNewItem} itemObserver={this.OnChangeNewItemValue}/> : null}
      </>
    );
  }
}

export default App;
