import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing  from './pages/landingPage/landing';
import MarsPage from './pages/mars/mars';
import MarsGalley from './pages/mars/marsGallery';
import './assets/styles/base/_app.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Mars' element={<MarsPage/>}/>
        <Route path='/Mars-gallery' element={<MarsGalley/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
