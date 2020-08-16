import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Library from './Library'

let bookList = [
  {"title": "Hunger", "author": "Roxane Gay", "pages": "320"},
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": "260"},
  {"title": "White Teeth", "author": "Zadie Smith", "pages": "480"},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": "304"}
]

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
