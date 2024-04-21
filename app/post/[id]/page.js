"use client"
import Navbar from "@/components/Navbar"
import { useState, useEffect } from 'react';
import getPostById from "@/components/actions/getPostById";
import Card from "@/components/Card";

export default function Page({ params }) {
    const {id} = params;
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
            try {
              const response = await getPostById(id);
              
              if (response) {
                console.log('res1', response);
                setPost(response);
              } else {
                console.log('res2', response);
                console.error('Failed to fetch post data');
              }
            } catch (error) {
              console.error('Error fetching post data:', error);
            }
          };
      
          if (id && !post) {
            fetchPost();
          }
        
    }, []);
    return(
        <>
    <Navbar />
    <main className="flex justify-center py-8">
    <div className="w-full md:w-1/3 px-4">
      {post && <div><Card content={post.content} created={post.created_at} /></div>}
      </div>
    </main>
    </>
    )
  }