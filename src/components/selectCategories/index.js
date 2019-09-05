import React, { Component } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';
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
            if(categoryId !== -1) this.props.onSelectCategory(categoryId)
        });
    }

    render(){
        return <form onSubmit={this.handleSubmit}>
          <FormControl>
            <Select value={this.state.categoryId} onChange={this.handleChange}>
                <MenuItem value={-1}>Selecciona una categoria</MenuItem>
                { this.state.categories.map(({ id, name }) => <MenuItem value={id} key={id}>{name}</MenuItem> )}
            </Select>
        </FormControl>
      </form>
    }
}

export default SelectCategories;