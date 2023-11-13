
import aboutstyle from "../css/About.module.css";

export function About() {
    return (
        <div>
                <div className={`${aboutstyle.about} text-center`} id="about">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center text-white">
                            <h1>My Ekman</h1>
                            <p>lorem mkmic cjw cdmoe mcm cnjjne jek v jkevjkfe fjkvf njvnfj fj dfff ggg kenf</p>
                        </div>
                        <div className={aboutstyle.logocontainer}>
                        <img className="img-fluid" src="../../public/images/loggatransmini.png" alt="..." />
                        </div>
                    </div>
                </div>
        </div>
    )
}