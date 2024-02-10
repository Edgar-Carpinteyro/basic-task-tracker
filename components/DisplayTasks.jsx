import React, { useState } from "react";

export function DisplayTasks() {
  const [inputValue, setInputValue] = useState("");
  const [taskMessage, setTaskMessage] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTaskMessage(inputValue);
  }

  return (
    <div>
      <form className="form">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter task"
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>

        <ul>
          <li>{taskMessage}</li>
        </ul>
      </form>
    </div>
  );
}
