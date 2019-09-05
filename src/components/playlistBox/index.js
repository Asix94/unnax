import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PlaylistBox = ({ playlist }) => {
    return <Card>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {playlist.name}
            </Typography>
        </CardContent>
    </Card>
    //return <li key={playlist.id}>{playlist.name}</li>
}

export default PlaylistBox;