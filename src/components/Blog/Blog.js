import React from 'react';
import useBlog from '../../Hooks/useBlog';
import BlogDetails from '../BlogDetails/BlogDetails';

const Blog = () => {
    const [blogs] = useBlog([]);
    return (
        <div className='container'>
            <div className="row mt-5">
                {
                    blogs.map(blog => <BlogDetails
                    key = {blog.id}
                    blog = {blog}
                    ></BlogDetails>)
                }         
            </div>
        </div>
    );
};

export default Blog;