import React from 'react';
import { ItemAdder, Items, ItemCount } from './components';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      items: [{ id: 0, value: 'test1' }, { id: 1, value: 'test2' }],
      addingItem: false
    }
  }

  OnChangeNewItemValue = event => {
    this.setState({ newItem: event.target.value })
  }

  OnRemoveItem = itemID => {
    this.setState(state => ({
      items: state.items.filter(anItem => itemID !== anItem.id)
    }));
  }

  OnAddNewItem = (event) => {
    event.preventDefault();
    this.handleAddNewItem();
    
    this.setState(state => ({
      items: [...state.items, {
        id: state.items.length,
        value: state.newItem
      }],
      newItem: '',
    }));
  }

  handleAddNewItem = () => {
    this.setState(state => ({ addingItem: !state.addingItem }))
  }

  render() {
    return (
      <>
        <ItemCount quantity={this.state.items.length} />
        <Items items={this.state.items} removeItem={this.OnRemoveItem} />
        {this.state.addingItem ?
          <ItemAdder item={this.state.newItem} addItem={this.OnAddNewItem} itemObserver={this.OnChangeNewItemValue} cancel={this.handleAddNewItem} /> :
          <Button onClick={this.handleAddNewItem}>add new item</Button>}
      </>
    );
  }
}

export default App;
