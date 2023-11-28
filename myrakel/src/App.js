import BasicNavbar from './components/Navbar';
import { Heading } from './pages/Heading';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './components/Contact';
import Gallery from './components/Gallery';
import PaintingDetail from './components/PaintingDetail';

/* <section id={gallerystyle.sliderbody}>
    <div className={gallerystyle.slider}>

    <div className={gallerystyle.slide}>
        <img
        src="https://source.unsplash.com/random?landscape,mountain"
        alt=""
        />
    </div>

    <div className={gallerystyle.slide}>
        <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
    </div>

    <div className={gallerystyle.slide}>
        <img src="https://source.unsplash.com/random?landscape,night" alt="" />
    </div>

    <div className={gallerystyle.slide}>
        <img src="https://source.unsplash.com/random?landscape,city" alt="" />
    </div>

    </div>
</section> */

function App() {
  return (
    <div>
      <BasicNavbar />
      <Heading />
      <About />
      <Projects />
      <Contact />
      <Gallery />
      <PaintingDetail />
    </div>
  );
}

export default App;
