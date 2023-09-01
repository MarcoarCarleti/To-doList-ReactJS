import React, { useState } from "react";

import Button from "./Button";

import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setinputData] = useState("");

  const handleInputChange = (e) => {
    setinputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setinputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
