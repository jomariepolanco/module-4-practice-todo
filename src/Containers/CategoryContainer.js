import React from 'react'
import CategoryButton from '../Components/CategoryButton'

class CategoryContainer extends React.Component{


    renderCategories = () => {
        return this.props.categories.map(category => {
        if (category === this.props.categoryClicked){
            return <CategoryButton selected={true} clicked={this.props.categoryClicked} handleClick={this.props.handleClick} cat={category}/>
        } else {
            return <CategoryButton clicked={this.props.categoryClicked} handleClick={this.props.handleClick} cat={category}/>
        }
        })
    }


    render(){
        return (
            <div className="categories">
            <h5>Category Filters</h5>
            {this.renderCategories()}
            </div>
            )
    }
}

export default CategoryContainer