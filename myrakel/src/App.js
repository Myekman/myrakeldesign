import gallerystyle from '../src/css/Gallery.module.css'
import Container from "react-bootstrap/Container";

import BasicNavbar from './components/Navbar';
import { Home
 } from './pages/Home';
// export function Home() {
//   return (
//     <div>
//       <h1>home</h1>
//     </div>
//   )
// }

// export function Gallery() {
//   return (
//     <div>
//         <BasicNavbarNavbar />
//         <Container className={gallerystyle.gallerycontainer}>
//         <h1>gallery</h1>
//         </Container>
//     </div>

//   )
// }

function App() {
  return (
    <div>
      <BasicNavbar />
      <Home />
    </div>
  );
}

export default App;
