import React from 'react';

const ItemCount = (props) => (
    <div>
        <h1>Supermarket List</h1>
        <h2>{props.quantity}</h2>
    </div>
)

export default ItemCount;