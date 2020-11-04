import React from 'react';

import './AuthorDetails.scss';

const UserInfo = props => (
    <div>
        <h3 className="marginTop">Info:</h3>
        <ul className="list">
            <li>Name: {props.user.name}</li>
            <li>Email: {props.user.email}</li>
            <li>Phone: {props.user.phone}</li>
            <li>Website: {props.user.website}</li>
        </ul>
    </div>
);

export default UserInfo;
