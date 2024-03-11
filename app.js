import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);

  const addTask = (task, quantity) => {
    const newTasks = Array.from({ length: quantity }, (_, index) => ({
      id: counter + index,
      name: task,
    }));
    setTasks((prevTasks) => [...prevTasks, ...newTasks]);
    setCounter((prevCounter) => prevCounter + quantity);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Todo App with a Twist</h1>
      <div>
        <input
          type="text"
          placeholder="Add Task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const input = e.target.value.trim();
              const [task, quantity] = input.split(/\s(\d+)$/);
              const taskQuantity = quantity ? parseInt(quantity, 10) : 1;
              addTask(task, taskQuantity);
              e.target.value = '';
            }
          }}
        />
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}{' '}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Tasks: {counter}</p>
      </div>
    </div>
  );
}

export default App;
