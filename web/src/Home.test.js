import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import {HashRouter} from "react-router-dom";
import Home from './App';

it('renders word Test', () => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1')
    ReactDOM.render(<HashRouter><Home /></HashRouter>, h1);
    expect(screen.getByText('Test')).toBeInTheDocument();
    ReactDOM.unmountComponentAtNode(div);
});
