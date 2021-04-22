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
import Testimonials from '../Testimonials/Testimonials.js';
import Partner from '../Partner/Partner.js';
import Request from '../Request/Request.js';
import Footer from '../Footer/Footer.js';
import Popup from '../Popup/Popup.js';
import Detail from '../Detail/Detail.js';
import * as api from '../../utils/api.js';

function App() {

  const [isRequestPopupOpen, setIsRequestPopupOpen] = React.useState(false);
  const [isDetailPopupOpen, setIsDetailPopupOpen] = React.useState(false);
  const [currentProgram, setCurrentProgram] = React.useState({
    name: '',
    profile: '',
    img: '',
    level: '',
    form: '',
    id: 0,
    course: [],
  });
  const [successRequest, setSuccessRequest] = React.useState(false);
  const [errorRequest, setErrorRequest] = React.useState(false);
  const [loadingRequest, setLoadingRequest] = React.useState(false);

  function closeAllPopups() {
    setIsRequestPopupOpen(false);
    setIsDetailPopupOpen(false);
  }

  function openRequestPopup() {
    setIsRequestPopupOpen(true);
    setSuccessRequest(false);
    setErrorRequest(false);
  }

  function openSuccessPopup() {
    closeAllPopups();
    setIsRequestPopupOpen(true);
    setSuccessRequest(true);
    setErrorRequest(false);
  }

  function openErrorPopup() {
    closeAllPopups();
    setIsRequestPopupOpen(true);
    setSuccessRequest(false);
    setErrorRequest(true);
  }

  function openDetailPopup() {
    setIsDetailPopupOpen(true);
  }

  function sendRequest({ fullname, phone, text }) {
    setLoadingRequest(true);
    api.eduRequest({ fullname, phone, text })
    .then(() => {
      openSuccessPopup();
    })
    .catch((err) => {
      console.error(err);
      openErrorPopup();
    })
    .finally(() => {
      setLoadingRequest(false);
    })
  }

  React.useEffect(() => { 
    api.getPrograms()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
  },[])
 
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
      <Programs
        onDetail={setCurrentProgram}
        showDetailPopup={openDetailPopup}
      />
      <Subscribe         
        onClickButton={openRequestPopup}  
      />
      <Education />
      <Testimonials />
      <Partner />
      <Request 
        sendRequest={sendRequest}
        loadingRequest={loadingRequest}
      />

      <Footer />

      <Popup           
        isOpen={isRequestPopupOpen}
        onClose={closeAllPopups}
        sendRequest={sendRequest}
        successRequest={successRequest}
        errorRequest={errorRequest}
        loadingRequest={loadingRequest}
      />

      <Detail
        program={currentProgram}      
        isOpen={isDetailPopupOpen}
        onClose={closeAllPopups}
        sendRequest={sendRequest}
        loadingRequest={loadingRequest}
      />
    </div>
  );
}

export default App;

