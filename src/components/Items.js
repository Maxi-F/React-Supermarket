import React from 'react';

const Items = (props) => (
    <>
    <ul>

{props.items.map(item => (
    <>
    <li>{item.value}</li> 
    <button onClick={() => props.removeItem(item.id)}>Remove</button>
    </>
    ))}
    </ul>
    </>
);

export default Items;