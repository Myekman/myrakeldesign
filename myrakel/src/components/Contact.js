import styles from '../css/Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.signupsection} id="signup">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-10 col-lg-8 mx-auto text-center">
                    <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                    <h2 className="text-white mb-5">Skicka din förfrågan här!</h2>
                    
                    <form action="https://formsubmit.co/myekman5@gmail.com" method="POST">
                        <div className="mb-3">
                            <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Adress" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="namel" className="form-control" id="exampleFormControlInput1" placeholder="Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="title" className="form-control" id="exampleFormControlInput2" placeholder="Tavla / Specialbeställning" required />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Skriv din förfrågan här..."></textarea>
                        </div>

                        <input type="hidden" name="_next" value="https://8000-myekman-myochmarcus-ooe3m6xlz3w.ws-eu105.gitpod.io/startbootstrap-grayscale-gh-pages/startbootstrap-grayscale-gh-pages/thankyou.html" />
                        <div className='d-flex'>
                        <button className={styles.buttonwhite} type="submit">Skicka</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact;