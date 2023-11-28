import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DetailPage from './pages/DetailPage';
import { Galleri } from './pages/Galleri';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Gallery from './components/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/galleri" element={<Galleri />} />
      <Route path="/galleri/:DetailId" element={<DetailPage />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/:DetailId" element={<DetailPage />} />
    </Routes>
    </BrowserRouter>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
