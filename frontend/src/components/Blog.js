import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);
    
    useEffect (() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);
                console.log(res.data);
            }
            catch(err){

            }
        }
        fetchData();

    }, []);
    useEffect (() => {
        const fetchBlogs = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                setBlogs(res.data);
                console.log(res.data);
            }
            catch(err){

            }
        }
        fetchBlogs();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };
    
    const getBlogs = () => {
        let list = [];
        let results = [];

        blogs.map(blogPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link"></Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='300' height='250' src={blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            results.push(
                <main className='container'>
                    <div key={i} className='row mb-2'>
                        <div className='col-md-6'>
                            {list[i]}
                        </div>
                        <div className='col-md-6'>
                            {list[i+1] ? list[i+1] : null}
                        </div>
                    </div>
                </main>
            )
                
        }

        return results;
    };
    return(
        <div className='container mt-6'>
            <div className="nav-scroller py-1 mb-3 border-bottom">
            <nav className="nav d-flex justify-content-between">
                <Link className="nav-item nav-link link-body-emphasis active" to='/category/esp32' href="#">ESP32</Link>
                <Link className="nav-item nav-link link-body-emphasis active" to='/category/arduino'  href="#">Arduino</Link>
                <Link className="nav-item nav-link link-body-emphasis active" to='/category/raspberrypi'  href="#">Raspberry Pi</Link>
                <Link className="nav-item nav-link link-body-emphasis active" to='/category/applications'  href="#">Software/Applications</Link>
                <Link className="nav-item nav-link link-body-emphasis active" to='/category/projects'  href="#">Projects</Link>
            </nav>
            </div>

            <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-dark-subtle">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <p className="lead mb-0">
                    <button type="button" className="btn btn-outline-primary">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-dark font-weight-bold no-underline">
                            Continue reading
                        </Link>
                    </button>
                    </p>
                </div>
            </div>
            <div className="container">
                {getBlogs()}
            </div>
        </div>
        );
    };

export default Blog;