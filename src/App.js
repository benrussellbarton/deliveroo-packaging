import React from 'react';
import Navigation from './components/navbar.js';
import Landing from './components/landing.js';
import FreeDeliverySection from './components/freeDeliverySection.js';
import ShopSection from './components/shopSection.js';
import SampleBanner from './components/sampleBanner.js';
import GoToSection from './components/goToSection.js';
import SearchBanner from './components/searchBanner.js';
import Footer from './components/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <FreeDeliverySection />
      <ShopSection />
      <SampleBanner />
      <GoToSection />
      <SearchBanner />
      <Footer />
    </div>
  );
}

export default App;
