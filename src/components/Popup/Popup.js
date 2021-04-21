import React from 'react';
import './Popup.css';
import RequestPopup from './RequestPopup/RequestPopup.js';
import SuccessPopup from './SuccessPopup/SuccessPopup.js';
import ErrorPopup from './ErrorPopup/ErrorPopup.js';

function Popup({ isOpen, onClose, sendRequest, successRequest, errorRequest, loadingRequest }) {

  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      
      <div className="popup__container">
        <button className="popup__close-button" onClick={onClose} type="button" />
        { successRequest 
        ?
          <SuccessPopup />
        :
          errorRequest 
          ?
          <ErrorPopup />
          :
          <RequestPopup
          isOpen={isOpen}
          sendRequest={sendRequest}
          loadingRequest={loadingRequest}
          />
        }
        
      </div>
    </section>
  )
}

export default Popup;