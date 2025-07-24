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
/*
Consegna
Creiamo il frontend del nostro mini e-commerce e le sue pagine principali! Useremo Fake Store API come backend fittizio per simulare i dati dei prodotti.
https://fakestoreapi.com/
Obiettivi
Installiamo React Router DOM: npm i react-router-dom
Creiamo almeno 3 pagine principali:
Homepage (con un messaggio di benvenuto o immagine promozionale)
Chi siamo
Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)
Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse
Bonus
Centralizziamo la Navbar usando un componente Layout
Gestiamo la classNamee active per i link attivi nella Navbar
*/