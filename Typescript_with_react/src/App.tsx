import React from 'react';
import Todos from './components/Todos';
import Todo from './modals/todo';
import './App.css';

function App() {

  const todos = [
    new Todo('Learn React'),
    new Todo('Boost productivity')
  ]

  return (
    <div className="App">
       <Todos items={todos}/>
    </div>
  );
}

export default App;
