// PaintingDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PaintingDetail = ({ paintingsData }) => {
  const { paintingId } = useParams();
  const painting = paintingsData && paintingsData.find((p) => p.id === parseInt(paintingId));


  if (!painting) {
    return <p>Painting not found.</p>;
  }

  return (
    <div>
      <h2>{painting.title}</h2>
      <img src={painting.src} alt={painting.title} />
      {/* Add other painting details as needed */}
    </div>
    
  );
};

export default PaintingDetail;