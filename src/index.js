import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// we use bootstarp 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
