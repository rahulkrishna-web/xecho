"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PostForm from "@/components/PostForm";
import Notice from '@/components/Notice';
import Card from "@/components/Card";
import Pagination from '@/components/Pagination';
import { submitPost } from '@/components/server/submitPost';


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Placeholder for total pages
  const [serverResponse, setServerResponse] = useState(null); // State for server response

  return (
    <>
    <Navbar />
    <main className="flex justify-center py-8">
    <div className="w-full md:w-1/3 px-4">
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
