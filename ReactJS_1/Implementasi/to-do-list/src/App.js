import React, { useState } from 'react';
import TaskList from './components/TaskList';
import { tambahTask, hapusTask, toggleTaskCompletion } from './tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      tambahTask(tasks, newTask);
      setTasks([...tasks]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    hapusTask(tasks, index);
    setTasks([...tasks]);
  };

  const handleToggleTask = (index) => {
    toggleTaskCompletion(tasks, index);
    setTasks([...tasks]);
  };

  return (
    <div style={styles.app}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task..."
        style={styles.input}
      />
      <button onClick={handleAddTask} style={styles.button}>Add Task</button>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px'
  },
  input: {
    width: 'calc(100% - 22px)',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '3px'
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    background: '#007BFF',
    color: 'white',
    borderRadius: '3px',
    cursor: 'pointer'
  }
};

export default App;
