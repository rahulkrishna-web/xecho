import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Card from './Card';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch('https://post.nxtnet.in');
          const data = await response.json();
          setPosts(data);
        };
    
        fetchPosts();
      }, []);

    return(
        <div>
      {posts.filter(post => post.content != "" ).map(post => (
        <Link href={`/post/${post.id}`} key={post.id}>
        <Card key={post.id} content={post.content} created={post.created_at} />
        </Link>
      ))}
    </div>
    );
}

export default PostsList