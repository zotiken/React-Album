import React from 'react';

import './AuthorDetails.scss';

import UserInfo from '../../components/User/UserInfo';
import UserPosts from '../../components/User/UserPosts';


const AuthorDetails = props => (
    <div className="authorDetails">
        <h2 className="authorHeading">About</h2>
        <UserInfo user={props.info}/>
        <UserPosts posts={props.posts}/>
    </div>
);


export default AuthorDetails;
