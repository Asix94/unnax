import React, { Component } from 'react'
import logic from '../../logic';

class SelectCategories extends Component {

    state = {
        categories: [],
        categoryId: ''
    };

    componentDidMount(){
        logic.getListBrowseCategory().then(res => {
            this.setState({
                categories : res
            })
        });
    }

    handleChange = event => {
        const categoryId = event.target.value;
        this.setState({categoryId}, () => {
            if(categoryId !== "-1") this.props.onSelectCategory(categoryId)
        });
    }

    render(){
        return <form onSubmit={this.handleSubmit}>
          <select value={this.state.categoryId} onChange={this.handleChange}>
              <option value={-1}>Selecciona una categoria</option>
              { this.state.categories.map(({ id, name }) => <option value={id} key={id}>{name}</option> )}
          </select>
      </form>
    }
}

export default SelectCategories;