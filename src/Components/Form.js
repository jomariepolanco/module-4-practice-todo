import React from 'react'

class Form extends React.Component{

    state = {
        text: "",
        category: "All"
    }

    renderCategories = () => {
        return this.props.categories.map(category => <option>{category}</option>)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewTask(this.state)
    }

    render(){
        console.log(this.state)
        return (
            <div>
            <h5>Tasks</h5>
            <form className="new-task-form" onSubmit={this.handleSubmit}>
                <input placeholder="New Task Details" name="text" type="text" onChange={this.handleChange}/>
                <select name="category" onChange={this.handleChange}>
                    {this.renderCategories()}
                </select>
                <input type="submit" value="Add Task"/>
            </form>
            </div>
            )
    }
}

export default Form