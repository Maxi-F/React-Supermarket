import React from 'react';

const ItemAdder = (props) => (
    <form onSubmit={props.addItem}>
        <input value={props.item} onChange={props.itemObserver}/>
        <button>Add Item</button>
    </form>
);

export default ItemAdder