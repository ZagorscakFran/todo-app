import { useState } from "react"
import "./components.css"

export function NewForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-form">
      <div className="input-container">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
         <button className="btn btn-outline-primary" type="submit">Add</button>
      </div>
    </form>
  );
}