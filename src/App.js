import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/home-page'
import ContactPage from './pages/contact-page';
import ThanksPage from './pages/thanks-page';

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/thanks' element={<ThanksPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
