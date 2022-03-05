import React, { useState } from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.modal';

const App: React.FC = () => {
  const [todoState, setTodoState] = useState<string>('add');
  const [todo, setTodo] = useState<Todo>({ id: '', text: '' });
  const [todos, setTodos] = useState<Todo[]>([]);

  const onSubmitTodo = (text: string) => {
    if (todoState === 'edit') {
      setTodos((prevTodos) => {
        return prevTodos.map((prevTodo) => {
          if (prevTodo.id === todo.id) {
            return todo;
          } else {
            return prevTodo;
          }
        });
      });
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), text: text },
      ]);
    }
    setTodo((prevTodo) => {
      return { ...prevTodo, id: '', text: '' };
    });
    setTodoState(() => {
      return '';
    });
  };

  const todoChangeHandler = (text: string) => {
    setTodo((prevTodo) => {
      return { ...prevTodo, text: text };
    });
  };

  const todoEditHandler = (id: string) => {
    setTodo((prevTodo) => {
      const todo = todos.filter((todo) => todo.id === id);
      const text = todo.length ? todo[0].text : '';
      return { ...prevTodo, id: id, text: text };
    });
    setTodoState(() => {
      return 'edit';
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo
        text={todo.text}
        state={todoState}
        onChangeTodo={todoChangeHandler}
        onSubmitTodo={onSubmitTodo}
      />
      <TodoList
        items={todos}
        onEditTodo={todoEditHandler}
        onDeleteTodo={todoDeleteHandler}
      />
    </div>
  );
};

export default App;