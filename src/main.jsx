import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <FormWithCustomHook />
  //</React.StrictMode>
)