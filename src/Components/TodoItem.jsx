import "./components.css"

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <li className="todo-item">
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        <button className="btn btn-outline-danger" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </li>
    )
  }