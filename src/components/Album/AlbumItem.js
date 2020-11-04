import React from 'react';
import PropTypes from 'prop-types';

import './Album.scss'

import {Link} from "react-router-dom";

const AlbumItem = props => (
    <div className="albumItem">
        <Link to={`/albums/${props.id}`} className="link">
            <div>
                <img className="albumPhoto" alt=''
                    src='https://2.bp.blogspot.com/-lN2GYZv1_ZA/WxKvU-4Q0qI/AAAAAAAACPI/KkAA3DcyMIUXQbcB1CDlqUwQsIHhZcn-wCLcBGAs/s320/Untitled-21.png' />
                <div className="caption">
                    <p><strong>Author:</strong> {props.username}</p>
                    <p><strong>Title:</strong> {props.title}</p>
                    <p><strong>Fotos:</strong> {props.length}</p>

                </div>
            </div>
        </Link>
    </div>
);

AlbumItem.propTypes = {
  id: PropTypes.any,
  title: PropTypes.string,
  username: PropTypes.string
};

export default AlbumItem;
