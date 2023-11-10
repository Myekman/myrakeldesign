import homestyle from '../css/Home.module.css';

export function Home() {
    return (
      <div>
        <header>
            <div className={`${homestyle.masthead} d-block d-xl-none`}>
                <div className="d-flex justify-content-center">
                    <div data-aos="zoom-in" data-aos-duration="1000" className={`${homestyle.hittakonstmobil} text-center`}>
                        <a className="btn btn-primary" href="#projects">Upptäck konsten</a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={`${homestyle.masthead3} col-sm d-none d-xl-block`}>
                    <div className={homestyle.container} data-aos="zoom-in" data-aos-duration="3000">
                        <div className={`${homestyle.hittakonst} text-center col-6 d-none d-xl-block`}>
                            <h3>
                                Find your 
                                <br />
                                special piece!
                            </h3>
                            <a className="mt-5 btn btn-primary d-none d-xl-block" href="#projects">Upptäck konsten</a>
                        </div>
                    </div>
                </div>
                <div className={`${homestyle.masthead} col-sm d-none d-xl-block`}></div>
              </div>
        </header>
      </div>
    )
  }