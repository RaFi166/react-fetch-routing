import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Post.css";

function Post(props) {
    const {title, userId, body,id} = props.allData;
    
    return (
        <div className="post_main">
            <h3>{title}</h3>
            <h5>{userId}</h5>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
                <button className="btn_posts">View Me</button>
            </Link>
        </div>
    )
}

export default Post
