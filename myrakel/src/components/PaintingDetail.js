// PaintingDetail.js
import paintingsData from '../data/paintingsData';
import { useParams } from 'react-router-dom';

// import Detalj1 from '../images/tavlagr.jpg';

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
      <div className={style.container}>
        <div className={style.card}>
          <div className='card-body'>
            <h1 className={style.detailtitle}>{painting.title}</h1>

              <div className="row">
                <div className="col-sm-4">
                  <div className='imagecontainer'>
                  <img
                    className={`${style.imagesize} img-fluid mb-3 mb-lg-0`}
                    src={painting.src}
                    alt={painting.title}
                  />
                  </div>
                </div>

                <div className={`${style.infoPaintingContainer} col-sm-8`}>
                  <div>
                    <h3 className={style.details}>Hello details here</h3>
                      <div className="row">
                        <div className="col-12">
                          <p>{painting.size}</p>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        
        </div>
    </div>
    </>
  );
};

export default PaintingDetail;