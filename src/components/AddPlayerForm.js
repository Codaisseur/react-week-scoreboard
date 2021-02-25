import { useState } from "react";

// src/components/AddPlayerForm.js
export default function AddPlayerForm() {
  const [name, set_name] = useState("");
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={event => {
            set_name(event.target.value);
          }}
        />{" "}
        <button>Add</button>
      </p>
    </div>
  );
}
