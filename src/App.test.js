import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Items from './components/Items';
import ItemCount from './components/ItemCount'

test('items are added correctly into the Items component', () => {
  const { getByText } = render(<Items items={[{id:1, value: 'test'}]} />);
  const itemTest = getByText(/test/i);
  expect(itemTest).toBeInTheDocument();
});

test('items remove button is called correctly when rendering Items', () => {
  const mockButtonClick = jest.fn();

  const ItemsShallow = shallow(<Items items={[{id:1, value: 'test'}]} removeItem={mockButtonClick}/>);
  ItemsShallow.find('button').simulate('click');
  expect(mockButtonClick.mock.calls.length).toBe(1);
});

test('item quantity is the correct one when loading ItemCount', () => {
  const ItemCountShallow = shallow(<ItemCount quantity={3}/>);
  expect(ItemCountShallow.find('h2').getElement().props.children).toBe(3);
});

test('ItemCount h2 element returns that the list is empty when quantity is 0', () => {
  const ItemCountShallow = shallow(<ItemCount quantity={0}/>);
  expect(ItemCountShallow.find('h2').getElement().props.children).toBe("List is Empty");
});