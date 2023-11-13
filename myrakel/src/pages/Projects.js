import styles from '../css/Project.module.css';
import Tavla1 from '../images/tavlagr.jpg';
import Tavla2 from '../images/tavlabrun.jpg';
import Tavla3 from '../images/tavlama.jpg';
import Tavla4 from '../images/abstrakt.jpg';

export function Projects() {
    return (
        <section className={`${styles.projects} bg-light`}  id="projects">
        <div className="container px-4 px-lg-5">
            
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div className="col-xl-8 col-lg-7">
                    <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div data-aos="fade-up" data-aos-duration="1000" className={`${styles.featured} text-center text-lg-left`}>
                        <h4>Specialbeställ din tavla</h4>
                        <p className="text-black-50 mb-0">Letar du efter en tavla med ett speciellt mått eller har du kankse önskemål på kulörer. Inga problem! Jag målar på beställning efter dina visioner.  </p>
                        <hr />
                        <p>Så hur gör jag för att beställa?</p>
                        <p>Skicka bild på en av mina tidigare tavlor som du gillar och skriv vilka färger du tänker dig så bollar vi fram idéer tillsammans.</p>
                    </div>
                </div>
            </div>
            
            <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div className="col-lg-6">
                    <img className="img-fluid" src={Tavla2} alt="..." />
                </div>
                <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div data-aos="zoom-in" data-aos-duration="1000" className={`${styles.projecttext} w-100 my-auto text-center text-lg-left`}>
                                <h4 className="text-white">Minimalistisk</h4>
                                <p className="mb-0 text-white-50">En tavelstil för dig som vill ha ett enkelt stilrent intryck. När jag målar den här typen av tavlor gillar jag att jobba med struktur för att få till ett liv i konstverket.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row gx-0 mt-5 justify-content-center">
                <div className="col-lg-6">
                    <img className="img-fluid" src={Tavla3} alt="..." />
                </div>
                <div className="col-lg-6 order-lg-first">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div data-aos="zoom-in" data-aos-duration="1000" className="project-text w-100 my-auto text-center text-lg-right">
                                <h4 className="text-white">Svepande</h4>
                                <p className="mb-0 text-white-50">Den svepande tavlan skapar jag genom flera lager av färg för att få till djupet, samt genom noga utvalda kulörer som harmoniserar med varandra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gx-0 mt-5 justify-content-center">
                <div className="col-lg-6">
                    <img className="img-fluid" src={Tavla4} alt="..." />
                </div>
                <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div data-aos="zoom-in" data-aos-duration="1000" className="project-text w-100 my-auto text-center text-lg-left">
                                <h4 className="text-white">Abstrakt Landskap</h4>
                                <p className="mb-0 text-white-50">Dessa tavlor föreställer landskap i fantasin, ibland mer tydliga sådana och ibland gillar jag att skapa landskap som är mer diffusa och som varje åskadare ser på olika sätt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}