import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then (res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div className="posts_main">
            {
                posts.map(allPosts => <Post allData= {allPosts}></Post>)
            }
            
        </div>
    )
}

export default Posts
