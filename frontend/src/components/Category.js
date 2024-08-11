import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Category = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const {id} = useParams();

    useEffect(() => {
        const category = id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, {category}, config);
                setBlogs(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return ' ';
    };
    
    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

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
                        <img width='200' height='250' src={blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };

    const fixWord = (text) => {
        if(text === "Raspberrypi"){
            return text.replace("Raspberrypi", "Raspberry Pi");
        }
        else {
            return text;
          }
            
    };

    return(
        <div className='container mt-3'>
            <h3 className='display-4'>{fixWord(currentCategory)}</h3>
            <div className="nav-scroller py-1 mb-3 border-bottom">
                <nav className="nav d-flex justify-content-between">
                    <Link className="nav-item nav-link link-body-emphasis active" to='/category/esp32' href="#">ESP32</Link>
                    <Link className="nav-item nav-link link-body-emphasis active" to='/category/arduino'  href="#">Arduino</Link>
                    <Link className="nav-item nav-link link-body-emphasis active" to='/category/raspberrypi'  href="#">Raspberry Pi</Link>
                    <Link className="nav-item nav-link link-body-emphasis active" to='/category/applications'  href="#">Software/Applications</Link>
                    <Link className="nav-item nav-link link-body-emphasis active" to='/category/projects'  href="#">Projects</Link>
                </nav>
            </div>
            {getCategoryBlogs()}
        </div>
    );
};
 
export default Category;