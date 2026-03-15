import { Component, createRef } from "react";

export class TaskList extends Component {
  state = {
    tasks: [
      { id: 1, text: "Купити хліб" },
      { id: 2, text: "Зробити дз" }
    ]
  };

  inputRef = createRef();

  addTask = () => {
    const value = this.inputRef.current.value;
    if (!value) return;

    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, { id: Date.now(), text: value }]
      };
    });

    this.inputRef.current.value = ""; 
  };


  deleteTask = (id) => {
    this.setState((prevState) => {
      return {

        tasks: prevState.tasks.filter(t => t.id !== id)
      };
    });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Мій список справ</h1>
        
        <input ref={this.inputRef} type="text" placeholder="Що зробити?" />
        <button onClick={this.addTask}>Додати</button>

        <ul>
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              {task.text} 
              <button onClick={() => this.deleteTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}