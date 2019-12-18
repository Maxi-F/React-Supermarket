import React from 'react';
import { ItemAdder, Items, ItemCount } from './components';
import './App.css';
import Button from 'react-bootstrap/Button';
import { getAllItems, addItem, deleteItem } from './api'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      items: [],
      addingItem: false,
      loadingStorage: true
    }
  }

  componentDidMount() {
    getAllItems().then((res) => {
      this.setState({
        items: res.items,
        loadingStorage: false
      })
    })
  }

  OnChangeNewItemValue = event => {
    this.setState({ newItem: event.target.value })
  }

  OnRemoveItem = itemToDelete => {
    this.setState({ loadingStorage: true });
    
    deleteItem(itemToDelete.value).then(() => {
      this.setState(state => ({
        items: state.items.filter(anItem => itemToDelete.id !== anItem.id),
        loadingStorage: false
      }))
    });
  }

  OnAddNewItem = (event) => {
    this.setState({ loadingStorage: true });

    event.preventDefault();
    this.handleAddNewItem();

    addItem(this.state.newItem).then((res) => {
      this.setState(state => ({
        items: [...state.items, {
          id: state.items.length,
          value: state.newItem,
        }],
        newItem: '',
        loadingStorage: false
      }))
    });
  }

  handleAddNewItem = () => {
    this.setState(state => ({ addingItem: !state.addingItem }))
  }

  render() {
    return (
      <>

        {this.state.loadingStorage ? <h1>Loading...</h1> :
          <>
            <ItemCount quantity={this.state.items.length} />
            <Items items={this.state.items} removeItem={this.OnRemoveItem} />
            {this.state.addingItem ?
              <ItemAdder item={this.state.newItem} addItem={this.OnAddNewItem} itemObserver={this.OnChangeNewItemValue} cancel={this.handleAddNewItem} /> :
              <Button onClick={this.handleAddNewItem}>add new item</Button>
            }
          </>
        }
      </>
    );
  }
}

export default App;
