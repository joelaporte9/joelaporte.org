import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = (match) => {
    const [blog, setBlog] = useState({});
    const {id} = useParams()

    useEffect(() => {
        const slug = id;
        
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch (err) {

            }
        };
        fetchData();

    }, [id]);

    const createBlog = () => {
        return {__html: blog.content}

    };

    return( 
        <div className='container mt-3'>
            <h1 className='display-2'>{blog.title}</h1>
            <h2 className='text-muted mt-3'>{blog.category}</h2>
            <h4>{blog.month} {blog.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className='lead mb-5'><Link to='/blog' className='font-weight-bold btn btn-dark no-underline'>Back to Blogs</Link></p>
        </div>
    );
};

export default BlogDetails;