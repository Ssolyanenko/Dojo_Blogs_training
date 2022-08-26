import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario')
    const [isPending, setIsPending] = useState(false)
    const navigate  = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {body, author, title}
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            navigate('/')
        })
        setIsPending(false)
    }
    return (
        <div className='create'>
            <h2> Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                       required
                       value={title}
                       onChange={(e) => {
                           setTitle(e.target.value)
                       }}
                />
                <label>Blog Body:</label>
                <textarea
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                    required
                >
                </textarea>
                <label>Blog Body:</label>
                <select
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button> Add Blog</button>}
                {isPending && <button disabled> Adding Blog...</button>}

            </form>
        </div>
    );
};

export default Create;