import React from 'react';
import { formatDateTime } from './utils/formatDateTime';

const Card = ({ content, author, created }) => {
  // Format the date
  const formattedDate = formatDateTime(created);

  return (
    <div className="p-4 mb-4 border rounded">
      <div style={{ whiteSpace: 'pre-wrap' }} className="mb-2">{content}</div>
      <div className="text-gray-500 text-sm">{author ? author : "Anon"} · {formattedDate}</div>
    </div>
  );
};

export default Card;
