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
                <div className={`${style.imagecontainer} col-xl-7 col-sm-12`}>
                  <div className='imagecontainer'>
                  <img
                    className={`${style.imagesize} img-fluid mb-3 mb-lg-0`}
                    src={painting.src}
                    alt={painting.title}
                  />
                  </div>
                </div>

                <div className={`${style.infoPaintingContainer} col-md-5`}>
                  <div>
                    <h3 className={style.details}>Skicka din förfrågan här:</h3>
                      <div className="row">
                        <div className="col-12">
                          <p>Storlek: {painting.size}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <p>Pris: {painting.pris}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className='col-12'>
                          <form action="https://formsubmit.co/myekman5@gmail.com" method="POST">
                            <div className="mb-3">
                                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Mail Adress" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="namel" className="form-control" id="exampleFormControlInput1" placeholder="Ditt namn" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="title" className="form-control" id="exampleFormControlInput2" placeholder="Tavlans namn" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Skriv din förfrågan här..."></textarea>
                            </div>

                            <input type="hidden" name="_next" value="https://8000-myekman-myochmarcus-ooe3m6xlz3w.ws-eu105.gitpod.io/startbootstrap-grayscale-gh-pages/startbootstrap-grayscale-gh-pages/thankyou.html" />
                            <div className='d-flex'>
                            <button className={style.buttonwhite} type="submit">Skicka</button>
                            </div>
                          </form>
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