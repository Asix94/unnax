import React from 'react'

const PlaylistBox = ({ playlist }) => {
    return <li key={playlist.id}>{playlist.name}</li>
}

export default PlaylistBox;