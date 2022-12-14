import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
const {id} = useParams()
    const navigate = useNavigate()
    const {data:blog,error, pending}=useFetch('http://localhost:8000/blogs/' + id)
    const handleDelete = ()=>{
fetch('http://localhost:8000/blogs/' + blog.id,{
    method: 'DELETE'
}).then(()=>{
    navigate('/')
})
    }
    return (
        <div className='blog-details'>
            {pending && <h2>Loading...</h2>}
            {error && <h2>{error} </h2>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                    <div> { blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;