import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppdoComp from './components/AppdoComp';
import Abc from './components/hooks/Abc';
import Parent1 from './components/use-contexts/Parent1';
import PataraContext from './components/use-contexts/pataro';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App />);