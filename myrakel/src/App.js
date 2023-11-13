import BasicNavbar from './components/Navbar';
import { Heading } from './pages/Heading';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

function App() {
  return (
    <div>
      <BasicNavbar />
      <Heading />
      <About />
      <Projects />
    </div>
  );
}

export default App;
