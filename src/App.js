import React from 'react';
import ItemCount from './components/ItemCount';
import Items from './components/Items';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newItem: '',
      items: [{id:1, value:'test1'}, {id:2, value:'test2'}]
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

  OnAddNewItem = () => {
    this.setState(state => ({
      items: state.items.concat(state.newItem) 
    }));
  }

  render () {
    return (
      <>
        <ItemCount quantity={this.state.items.length}/>
        <Items items={this.state.items} removeItem={this.OnRemoveItem}/>
        {/*<AddItem addItem={this.OnAddNewItem} itemObserver={this.OnChangeNewItemValue}>*/}
      </>
    );
  }
}

export default App;
