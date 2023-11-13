import BasicNavbar from './components/Navbar';
import { Heading } from './pages/Heading';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div>
      <BasicNavbar />
      <Heading />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
