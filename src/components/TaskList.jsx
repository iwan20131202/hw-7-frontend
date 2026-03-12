import React, { Component, createRef } from 'react';

class TaskList extends Component {
static tasks = [
    { id: 1, text: "Купити хліб" },
    { id: 2, text: "Зробити дз по реакт" }
  ];

  inputRef = createRef();


  handleAddTask = () => {
    const inputValue = this.inputRef.current.value;

      if (inputValue.trim()) {
          const newTask = {
              id: Date.now(),
              text: inputValue
          };

          TaskList.tasks.push(newTask);
          this.inputRef.current.value = "";
          this.forceUpdate();
      }
  };

  handleDeleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter(task => task.id !== id);
    this.forceUpdate(); 
  };

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Список справ (No-State)</h1>
        
        <div style={styles.inputBlock}>
          <input 
            type="text" 
            ref={this.inputRef} 
            placeholder="Що плануєте?" 
            style={styles.input}
          />
          <button onClick={this.handleAddTask} style={styles.addBtn}>
            Додати
          </button>
        </div>

        <ul style={styles.list}>
          {TaskList.tasks.map(task => (
            <li key={task.id} style={styles.item}>
              <span>{task.text}</span>
              <button 
                onClick={() => this.handleDeleteTask(task.id)} 
                style={styles.deleteBtn}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: { padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' },
  title: { textAlign: 'center', color: '#333' },
  inputBlock: { display: 'flex', gap: '10px', marginBottom: '20px' },
  input: { flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  addBtn: { padding: '8px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  list: { listStyle: 'none', padding: 0 },
  item: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '10px', 
    borderBottom: '1px solid #eee',
    alignItems: 'center' 
  },
  deleteBtn: { padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default TaskList;