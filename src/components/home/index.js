import React, { Component, Fragment } from 'react';
import SelectCategories from '../selectCategories';
import Playlists from '../playlists';
import Header from '../header';
import Footer from '../footer';
import './index.css';

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
                <SelectCategories onSelectCategory={this.handleSelectCategory}/>
                <Playlists categoryId={this.state.categoryId} />
            </Fragment>
        );
    }
}

export default Home;