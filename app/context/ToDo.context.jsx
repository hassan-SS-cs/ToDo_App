import React, { createContext, useState, useContext } from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, description) => {
    if (!text.trim()) return;
    const newTodo = { 
      id: Date.now(), 
      text, 
      description, 
      done: false,
      displayDate: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const updateTask = (id, newText, newDescription) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id 
          ? { ...todo, text: newText, description: newDescription } 
          : todo
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ToDoContext.Provider value={{ todos, addTodo, updateTask, toggleTodo, removeTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContext;
