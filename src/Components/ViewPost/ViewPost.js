import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function ViewPost() {
    const { id } = useParams();
    const [postdata, setPostdata] = useState({});
    let URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setPostdata(data))
    }, [])

    return (
        <div>
            <h1>Data No: {postdata.id}</h1>
            <h1>{postdata.title}</h1>
            <p>{postdata.body}</p>


        </div>
    )
}

export default ViewPost
