// components/Card.js

import React from 'react';

const Card = ({ content }) => {
  return (
    <div className="p-4 mb-4 border rounded">
      {content}
    </div>
  );
};

export default Card;
