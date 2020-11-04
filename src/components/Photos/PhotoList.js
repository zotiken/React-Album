import React from 'react';

import PhotoItem from './PhotoItem';

const PhotoList = props => (
    props.photos.map((photo,i) => (
        <PhotoItem key={photo.id} {...photo} photos={props.photos} indificator={i} fullSize={props.photoClick} />
    ))
);

export default PhotoList;
