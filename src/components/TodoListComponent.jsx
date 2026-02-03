import React, { useState } from 'react';

export default function TodoListComponent() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);

    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Ajouter un todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Ajouter</button>

      {todos.length === 0 ? (
        <p>Aucun todo</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
              >
                {todo.text}
              </span>

              <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
