import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC=() =>{
  const todos= [{id:'t1', text: 'Walk 10km'}];
  const todoAddHandler = (text:string) => {
    console.log(text);
  }
return (
<div className="App"> 
{/* A component that adds todos */} 
<NewTodo />
<TodoList items={todos} />

  </div>
  )
}

export default App;
