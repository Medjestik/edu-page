import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Introduction from '../Introduction/Introduction.js';
import Numbers from '../Numbers/Numbers.js';
import About from '../About/About.js';
import Features from '../Features/Features.js';
import Advantages from '../Advantages/Advantages.js';
import Programs from '../Programs/Programs.js';
import Subscribe from '../Subscribe/Subscribe.js';
import Education from '../Education/Education.js';
import Partner from '../Partner/Partner.js';
import Testimonials from '../Testimonials/Testimonials.js';
import Footer from '../Footer/Footer.js';
import Popup from '../Popup/Popup.js';

function App() {

  const [isRequestPopupOpen, setIsRequestPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setIsRequestPopupOpen(false);
  }

  function openRequestPopup() {
    setIsRequestPopupOpen(true);
  }

  React.useEffect(() => { 
    function handleEscClose(e) {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    }
  
    function closeByOverlay(e) {
      if (e.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }

    document.addEventListener('keyup', handleEscClose);
    document.addEventListener('click', closeByOverlay);

    return () => {
      document.removeEventListener('keyup', handleEscClose);
      document.removeEventListener('click', closeByOverlay);
    }
  })
  
  return (
    <div className="page">
      <Header />
      <Introduction  
        onClickButton={openRequestPopup}
      />
      <Numbers />
      <About />
      <Features 
        onClickButton={openRequestPopup}
      />
      <Advantages />
      <Programs />
      <Subscribe         
        onClickButton={openRequestPopup}  
      />
      <Education />
      <Testimonials />
      <Partner />

      <Footer />

      <Popup           
        isOpen={isRequestPopupOpen}
        onClose={closeAllPopups} 
      />
    </div>
  );
}

export default App;

