import React from 'react';
import Modal from 'react-modal';

const Popup = ({ isOpen, onClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <div>
        <p>{content}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </Modal>
  );
};

export default Popup;
