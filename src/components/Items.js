import React from 'react';

const Items = (props) => (
    <>
    <ul>

{props.items.map(item => (
    <div key={item.id}>
    <li>{item.value}</li> 
    <button onClick={() => props.removeItem(item.id)}>Remove</button>
    </div>
    ))}
    </ul>
    </>
);

export default Items;