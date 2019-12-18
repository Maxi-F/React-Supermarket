import React from 'react';

const ItemAdder = (props) => (
    <div>
        <form onSubmit={props.addItem}>
            <input value={props.item} onChange={props.itemObserver}/>
            <button>Add Item</button>
        </form>
            <button onClick={props.cancel}>Cancel</button>
    </div>
);

export default ItemAdder