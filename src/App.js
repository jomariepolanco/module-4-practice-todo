import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoryContainer from './Containers/CategoryContainer'
import TasksContainer from './Containers/TasksContainer';

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    categoryClicked: "All"
  }

  handleCategoryClick = (e) => {
    this.setState({categoryClicked: e.target.textContent})
  }

  filterTasks = () => {
    if (this.state.categoryClicked === "All"){
      return this.state.tasks
    } else {
      let newArray = [...this.state.tasks].filter(task => task.category === this.state.categoryClicked)
      return newArray
    }
  }

  handleDeleteClick = (taskObj) => {
    let newArray = [...this.state.tasks].filter(task => task.text !== taskObj.text)
    this.setState({tasks: newArray})
  }

  createNewTask = (taskObj) => {
    let newArray = [...this.state.tasks, taskObj]
    this.setState({tasks: newArray})
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryContainer categoryClicked={this.state.categoryClicked} categories={CATEGORIES} handleClick={this.handleCategoryClick}/>
        <TasksContainer createNewTask={this.createNewTask} categories={CATEGORIES} tasks={this.filterTasks()} handleDeleteClick={this.handleDeleteClick}/>
      </div>
    );
  }
}


export default App;
