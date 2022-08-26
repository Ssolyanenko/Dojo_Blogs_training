import React from 'react';
import {NavLink} from "react-router-dom";

const BlogList = (props) => {
    const {blogs, title,} = props

    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map((el) => (
                <div className="blog-preview" key={el.id}>
                    <NavLink to={`/blogs/${el.id}`}>  <h2>{el.title}</h2>
                        <h5>Written by {el.author}</h5> </NavLink>

                </div>
            ))}
        </div>
    );
};

export default BlogList;