import React, { Component } from 'react';
import logic from '../../logic';
import Card, { Content, Header } from '../card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
                {playlists.map(playlist => {
                    const image = playlist.images && playlist.images[0] && playlist.images[0].url;
                    
                    return (
                        <Grid item md={2}>
                            <Card>
                                <Header>
                                    <CardMedia
                                        component="img"
                                        alt={playlist.name}
                                        height="140"
                                        image={image}
                                        title={playlist.name}
                                    />
                                </Header>
                                <Content>
                                    <Typography>
                                        {playlist.name}
                                    </Typography>
                                </Content>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

export default Playlists;