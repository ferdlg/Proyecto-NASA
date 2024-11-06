import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarsPage from './pages/mars/mars';
import MarsGalley from './pages/mars/marsGallery';
import './assets/styles/base/_app.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/Mars' element={<MarsPage/>}/>
        <Route path='/Mars-gallery' element={<MarsGalley/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
