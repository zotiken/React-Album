import React from 'react';

import './Photos.scss';

const PhotoItem = props =>{
   return  (
    <div className="item" onClick={() => {props.fullSize(props.indificator)}}>
        <img src={props.thumbnailUrl} alt='' />
        <div className="filter"></div>
        <div className="info">{props.title}</div>
    </div>
)};

export default PhotoItem;
