import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import "./components.css"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  const [filter, setFilter] = useState('all');

  const filteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="filter-buttons">
      <div>
        <button className='btn btn-outline-primary' onClick={() => setFilter('all')}>
          All
        </button>
        <button className='btn btn-outline-primary' onClick={() => setFilter('active')}>
          Active
        </button>
        <button className='btn btn-outline-primary' onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>
      <ul>
        {filteredTodos().length === 0 && <p>No Todos</p>}
        {filteredTodos().map(todo => (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}