import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const PlaylistBox = ({ playlist }) => {
    return <Grid item md={2}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {playlist.name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
}

export default PlaylistBox;