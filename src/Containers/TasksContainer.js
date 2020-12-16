import React from 'react'
import Task from '../Components/Task'
import Form from '../Components/Form'

class TasksContainer extends React.Component{

    renderTasks = () => {
        return this.props.tasks.map(task => <Task task={task} handleDeleteClick={this.props.handleDeleteClick}/>)
    }

    render(){
        return(
            <div className="tasks">
                <Form categories={this.props.categories} createNewTask={this.props.createNewTask}/>
                {this.renderTasks()}
            </div>
            )
    }
}

export default TasksContainer