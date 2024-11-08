import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing  from './pages/landingPage/landing';
import MarsPage from './pages/mars/mars';
import MarsGalley from './pages/mars/marsGallery';
import './assets/styles/base/_app.css';
import StarField from './components/StarrySpace/StarrySpace';
import ExoplanetPage from './pages/exoplanets/ExoplanetsPage';
import ExoplanetsGallery from './pages/exoplanets/exoplanetsGallery';
import ExoplanetsData from './pages/exoplanets/exoplanetsData';


function App() {
  return (
    <>
      <BrowserRouter>
      <StarField>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Mars' element={<MarsPage/>}/>
        <Route path='/Mars-gallery' element={<MarsGalley/>}/>
        <Route path='/Exoplanets' element={<ExoplanetPage/>}/>
        <Route path='/Exoplanets-gallery' element={<ExoplanetsGallery/>}/>
      </Routes>
      </StarField>
      </BrowserRouter>
    </>
  );
}

export default App;
