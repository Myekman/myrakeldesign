// PaintingDetail.js
import React from 'react';

const PaintingDetail = ({ paintingsData, selectedPainting }) => {
  // Check if selectedPainting is defined and has the expected properties
  if (!selectedPainting || !selectedPainting.id) {
    return <div>Error: Invalid painting selected.</div>;
  }

  // Access the selected painting and paintingsData
  const paintingDetails = paintingsData.find(painting => painting.id === selectedPainting.id);

  return (
    <div>
      <h2>{paintingDetails.title}</h2>
      <img src={paintingDetails.src} alt={paintingDetails.title} />
      {/* Display other details if needed */}
    </div>
  );
};

export default PaintingDetail;