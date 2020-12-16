import React from 'react'

class CategoryButton extends React.Component{



    render(){

        return (
            <>
            {this.props.selected ? <button className="selected" onClick={this.props.handleClick}>{this.props.cat}</button> : <button onClick={this.props.handleClick}>{this.props.cat}</button>}
            </>
        )
    }
}

export default CategoryButton