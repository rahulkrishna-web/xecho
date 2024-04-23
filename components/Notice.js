"use client"

import { useState, useEffect } from 'react';
import { FiXCircle } from "react-icons/fi";

const Notice = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="bg-green-500 text-white p-4 fixed bottom-0 left-0 right-0 z-50 text-center flex justify-between items-center">
          <span>Post saved</span>
          <button className="text-white" onClick={handleClose}>
            <FiXCircle size={18}/>
          </button>
        </div>
      )}
    </>
  );
};

export default Notice;

