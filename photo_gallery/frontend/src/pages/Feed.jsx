import  { useState, useEffect } from 'react';
import axios from 'axios';
const Feed = () => {
  const [posts, setPosts] = useState([
    
  ]);
  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then((response) => {
        setPosts(response.data.posts);
    })
  }, []);

  return (
    <section className="feed">
      {posts.map((post) => (
        <div key={post._id} className="post">
          <img src={post.image} alt="Post" />
          <p>{post.caption}</p>
        </div>
      ))}
    </section>
  );
};

export default Feed;