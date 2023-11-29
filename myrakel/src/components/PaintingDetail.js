// PaintingDetail.js
import React from 'react';
import paintingsData from '../data/paintingsData';
import { useParams } from 'react-router-dom';

const PaintingDetail = () => {
  const { id } = useParams();
  const painting = paintingsData.find((p) => p.id === parseInt(id));

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <div>
      <h1>{painting.title}</h1>
      <img src={painting.src} alt={painting.title} />
      {/* Add more details as needed */}
    </div>
  );
};

export default PaintingDetail;