import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import Card from './Card';
import AppStateContext from './context/AppStateContext';

const PostsList = () => {
  const { posts } = useContext(AppStateContext);

  if (!posts) {
    return <div>Loading...</div>;
  }
    return(
       <div>
    {posts && posts.map((post, index) => (
      <div key={index}>
      <Link href={`/post/${post.id}`}>
        <Card content={post.content} author={post.author} created={post.created_at}/>
      </Link>
      </div>
    ))}
  </div>
    );
}

export default PostsList