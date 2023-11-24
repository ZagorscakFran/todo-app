import React, { useState } from 'react';
import { TodoItem } from './TodoItem';

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
    <div>
      <div>
        <button onClick={() => setFilter('all')}>
          All
        </button>
        <button onClick={() => setFilter('active')}>
          Active
        </button>
        <button onClick={() => setFilter('completed')}>
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