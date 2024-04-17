"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PostForm from "@/components/PostForm";
import Notice from '@/components/Notice';
import Card from "@/components/Card";
import Pagination from '@/components/Pagination';


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Placeholder for total pages
  const [serverResponse, setServerResponse] = useState(null); // State for server response

  const submitPost = async (content) => {
    try {
      const response = await fetch('http://post.nxtnet.in/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
  
      if (response.ok) {
        setServerResponse('Post created successfully!'); // Set success message
      } else {
        setServerResponse('Error creating post. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Failed to submit post:', error);
      setServerResponse('An error occurred. Please try again later.'); // Set generic error message
    }
  };

  return (
    <>
    <Navbar />
    <main className="flex justify-center py-8">
    <div className="w-1/3">
      <PostForm onSubmit={submitPost} />
      {serverResponse && <Notice message={serverResponse} />} {/* Display the notice */}
      {/* Render 10 placeholder cards */}
      {[...Array(10)].map((_, index) => (
          <Card key={index} content={`Placeholder content ${index + 1}`} />
        ))}
      <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
    </>
  );
}
