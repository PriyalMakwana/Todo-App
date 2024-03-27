import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { TodosProvider } from './store/TodoStore';
//import { TodosProvider } from './src/store/todostore';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <TodosProvider>
    <App />
    </TodosProvider>  
  </React.StrictMode>
);