import { useEffect } from 'react';
import Contact from '../components/Contact';
import homestyle from '../css/Home.module.css';
import About from './About';
import Projects from './Projects';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
    <div>
            <div className={`${homestyle.masthead} d-block d-md-none`}>
                <div className="d-flex justify-content-center">
                    <div data-aos="zoom-in" data-aos-duration="1000" className={`${homestyle.hittakonstmobil} text-center`}>
                        <a className={`${homestyle.button} text-center`} href="#projects">Upptäck konsten</a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={`${homestyle.masthead3} col-sm d-none d-md-block`}>
                    <div className={homestyle.container} data-aos="zoom-in" data-aos-duration="3000">
                        <div className={`${homestyle.hittakonst} col-6 d-none d-md-block`}>
                            <h3>
                                Find your 
                                <br />
                                special piece!
                            </h3>
                            <button type="button" href="#projects" className={`${homestyle.button2} mt-4`}>Discover</button>
                        </div>
                    </div>
                </div>
                <div className={`${homestyle.masthead} col-sm d-none d-md-block`}></div>
              </div>
              <About />
              <Projects />
              <Contact />
    </div>
    );
  }

  export default Home;