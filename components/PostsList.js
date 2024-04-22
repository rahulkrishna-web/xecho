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
      <ul key={index}>
      <Card content={post.content} author={post.author} created={post.created_at}/>
      </ul>
    ))}
  </div>
    );
}

export default PostsList