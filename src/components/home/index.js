import React, { Component, Fragment } from 'react';
import SelectCategories from '../selectCategories';
import Playlists from '../playlists';

class Home extends Component {

    state = {
        categoryId: ''
    };

    handleSelectCategory = categoryId => {
        this.setState({ categoryId })
    }

    render() {
        return (
            <Fragment>
                <h1> Hello </h1>
                <SelectCategories onSelectCategory={this.handleSelectCategory}/>
                <Playlists categoryId={this.state.categoryId} />
            </Fragment>
        );
    }
}

export default Home;