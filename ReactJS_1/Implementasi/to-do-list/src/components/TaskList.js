import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <ul style={styles.list}>
      {tasks.map((task, index) => (
        <li key={index} style={styles.listItem} className={task.completed ? 'completed' : ''}>
          <span
            onClick={() => onToggleTask(index)}
            style={task.completed ? { ...styles.taskText, ...styles.completedTask } : styles.taskText}
          >
            {task.text}
          </span>
          <button onClick={() => onDeleteTask(index)} style={styles.deleteButton}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    padding: '10px',
    background: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '3px',
    marginBottom: '5px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  taskText: {
    cursor: 'pointer'
  },
  completedTask: {
    textDecoration: 'line-through',
    color: '#888'
  },
  deleteButton: {
    background: 'red',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '3px'
  },
};

export default TaskList;
