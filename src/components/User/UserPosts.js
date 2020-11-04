import React from 'react';

import './AuthorDetails.scss';

const UserPosts = props => (
    <div>
        <h3 className="marginTop">Tags:</h3>
        <ul className="list">
            {props.posts.map(post => (<li key={post.id}><em>Title: {post.title}</em></li>))}
        </ul>
    </div>
);


export default UserPosts;
