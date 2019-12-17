import React from 'react';

const Buttons = (props) => (
    <>
    <button onClick={props.addItem}>add</button>
    <button onClick={props.removeItem}>delete</button>
    </>
);

export default Buttons;