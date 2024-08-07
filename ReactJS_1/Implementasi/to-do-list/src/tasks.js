export function tambahTask(tasks, taskText) {
    tasks.push({
      text: taskText,
      completed: false
    });
  }
  
  export function hapusTask(tasks, index) {
    tasks.splice(index, 1);
  }
  
  export function toggleTaskCompletion(tasks, index) {
    tasks[index].completed = !tasks[index].completed;
  }
  