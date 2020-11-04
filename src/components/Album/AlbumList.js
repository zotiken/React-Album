import React from 'react';

import './Album.scss'
import AlbumItem from './AlbumItem';

const AlbumList = props => (
 <ul className="albumList">
     {props.albums.map(album => (
         <AlbumItem key={album.id} id={album.id} title={album.title} username={album.username} length={album.length}/>
     ))}
 </ul>
);


export default AlbumList;
