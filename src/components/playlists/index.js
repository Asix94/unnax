import React, { Component, Fragment } from 'react';
import logic from '../../logic';
import PlaylistBox from '../playlistBox/';

class Playlists extends Component {

    state = {
        playlists: []
    };

    componentDidUpdate(prevProps) {
        if (this.props.categoryId !== prevProps.categoryId) {
            this.fetchCategoryPlayList();
        }
    }

    fetchCategoryPlayList = () => {
        logic.getCategoryPlayList(this.props.categoryId).then(res => {
            this.setState({
                playlists : res
            })
        });
    }

    render() {
        const { playlists } = this.state;

        return (
            <ul>
                {playlists.map(playlist => <PlaylistBox playlist={playlist} /> )}
            </ul>
        );
    }
}

export default Playlists;