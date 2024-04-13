import React, { useState, useEffect } from 'react';
import "./Blogs.css"

function Blogs() {
  const [posts, setPosts] = useState([]);
  const mediumRSSFeed = "https://medium.com/feed/@husseinshukri";
  const rssToJsonApi = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumRSSFeed)}`;

  useEffect(() => {
    fetch(rssToJsonApi)
      .then(response => response.json())
      .then(data => {
        setPosts(data.items); // Assuming the API response has an 'items' key with the blog posts
      });
  }, []);

  const BlogPost = ({ title, author, date, content }) => (
    <article>
      <h2>{title}</h2>
      <p>By {author} on {new Date(date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );

  return (
    <>
      <div className="blog-body">
        {posts.map(post => (
          <BlogPost
            key={post.guid}
            title={post.title}
            author={post.author}
            date={post.pubDate}
            content={post.description}
          />
        ))}
      </div>
    </>
  );
}

export default Blogs;