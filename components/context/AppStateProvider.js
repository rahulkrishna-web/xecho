"use client"
// AppStateProvider.js
import React, { useEffect, useState } from 'react';
import AppStateContext from './AppStateContext';
import getPosts from '../actions/getPosts';

const AppStateProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await getPosts();
      if (data) {
        setPosts(data); // Assuming setPosts is a state update function
      }
    };
  
    fetchDataAndSetState();
  }, []);

  return (
    <AppStateContext.Provider value={{ posts, setPosts }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
