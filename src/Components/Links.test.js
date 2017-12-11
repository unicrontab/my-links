import React from 'react';
import ReactDOM from 'react-dom';
import Links from './Links';

it('renders without crashing', () => {
    const data = [{ url: '#', icon: 'default' }];
    const color = '#FFFFFF';
    const div = document.createElement('div');
    ReactDOM.render(<Links data={data} color={color} />, div);
});
