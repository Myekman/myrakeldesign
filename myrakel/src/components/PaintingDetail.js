// PaintingDetail.js
import React from 'react';
import paintingsData from '../data/paintingsData';
import { useParams } from 'react-router-dom';
// import Container from 'react-bootstrap/esm/Container';

import style from '../css/Paintingsdata.module.css';

const PaintingDetail = () => {
  const { id } = useParams();
  const painting = paintingsData.find((p) => p.id === parseInt(id));

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <>
    <div>
        <div className={style.card}>
          <div className='card-body'>
            <h1>{painting.title}</h1>
            <div class="row">
              <div class="col-lg-5 col-md-5 col-sm-6">
                <div className='imagecontainer'>
                    <img
                      className={`${style.imagesize} img-fluid mb-3 mb-lg-0`}
                      src={painting.src}
                      alt={painting.title}
                    />
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6">
                <h1 className={style.details}>Hello details here</h1>
              </div>
            </div>
          </div>
        </div>
        
    
    </div>
    </>
  );
};

export default PaintingDetail;