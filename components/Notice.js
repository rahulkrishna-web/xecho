// components/Notice.js

import React from 'react';

const Notice = ({ message }) => {
  return (
    <div className="text-center text-green-600 my-4">
      {message}
    </div>
  );
};

export default Notice;
