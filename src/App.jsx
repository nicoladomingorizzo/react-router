import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductsPage';
import AboutUsPage from './pages/AboutUsPage';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route Component={DefaultLayout}>

            <Route index Component={Homepage} />
            <Route path='/products' Component={ProductPage} />
            <Route path='/about' Component={AboutUsPage} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

