
import aboutstyle from "../css/About.module.css";
import Logo from '../images/loggatransmini.png';
import AnotherImageTop from '../images/våg.png';
import AnotherImageBottom from '../images/bottom.png';

const About = () => {
    return (
        <div>
            <div className={`${aboutstyle.about} text-center`} id="about">
                <div className={aboutstyle.waveimagebottom}>
                    <img src={AnotherImageTop} alt="wave" className="img-fluid" id="wavebottom" />
                </div>
                <div>
                    <div className="row justify-content-center text-white p-4">
                        <h1>My Ekman</h1>
                        <p>lorem mkmic cjw cdmoe mcm cnjjne jek v jkevjkfe fjkvf njvnfj fj dfff ggg kenf</p>
                    </div>
                    <div className={aboutstyle.logocontainer}>
                        <img className="img-fluid" src={Logo} alt="logga" />
                    </div>
                </div>
                <div className={aboutstyle.waveimagebottom}>
                    <img src={AnotherImageBottom} alt="wave" className="img-fluid" id="wavebottom" />
                </div>
            </div>
        </div>
    )
}

export default About;