import React from 'react';

const ItemCount = (props) => (
    <div>
        <h1>Supermarket List</h1>
        <h2>{props.quantity == 0 ? "List is Empty" : props.quantity}</h2>
    </div>
)

export default ItemCount;