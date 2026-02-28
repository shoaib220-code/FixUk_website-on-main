import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Emergency } from './pages/Emergency';
import { EICR } from './pages/EICR';
import { FuseBoard } from './pages/FuseBoard';
import { Lighting } from './pages/Lighting';
import { Rewires } from './pages/Rewires';
import { Reviews } from './pages/Reviews';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/eicr" element={<EICR />} />
            <Route path="/fuseboard" element={<FuseBoard />} />
            <Route path="/lighting" element={<Lighting />} />
            <Route path="/rewires" element={<Rewires />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
