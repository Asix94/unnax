import React, { Component } from 'react';
import logic from '../../logic';
import PlaylistBox from '../playlistBox/';
import Grid from '@material-ui/core/Grid';

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
            <Grid container spacing={4}>
                {playlists.map(playlist => <PlaylistBox playlist={playlist} /> )}
            </Grid>
        );
    }
}

export default Playlists;