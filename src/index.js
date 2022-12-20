import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './CardsData/DataProvider';
import {reducer, initialData } from './CardsData/Reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider initialData={initialData} reducer={reducer}>
    <App />
    </DataProvider>
    
  </React.StrictMode>
);

