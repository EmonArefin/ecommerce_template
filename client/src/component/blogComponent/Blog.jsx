import React from 'react';
import "../blogComponent/blog.css"

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="feedback-section-title mt-5">
          <p className="text-center">BLOG</p>
          <h3 className="text-center">Discover Our Latest Articles</h3>
          <p className="text-center">
            Stay updated with our blog to get insights, tips, and news about our industry and products.
          </p>
          <hr className="hr-style" style={{ borderColor: '#0d6efd', marginBottom: '50px' }} />
        </div>
        <div className="blog-posts">
          {/* Add your blog posts here */}
          <div className="blog-post">
            <h4>Blog Post Title 1</h4>
            <p>Published on: Date 1</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at velit nec
              tellus accumsan laoreet. Vivamus hendrerit arcu sed turpis condimentum, ut interdum
              mi sodales.
            </p>
          </div>
          <div className="blog-post">
            <h4>Blog Post Title 2</h4>
            <p>Published on: Date 2</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          {/* Add more blog posts as needed */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
