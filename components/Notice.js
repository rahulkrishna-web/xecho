// components/Notice.js

import React from 'react';

const Notice = ({ children }) => {
  return (
    <div className="text-center text-green-600 my-4">
      {children}
    </div>
  );
};

export default Notice;
