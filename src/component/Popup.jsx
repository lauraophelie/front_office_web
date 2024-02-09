import Modal from 'react-modal';


const Popup = ({ isOpen, onClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      className="popup"
    >
    <div>
        <button className='fermer' onClick={onClose}>X</button>
    </div>
    <div>
      <h5 className='titre'>Contacter le proprietaire</h5>
    </div>
    <div>
      <h3 className='your_message'>Votre message : </h3>
      <textarea className='text'></textarea>
      <button className='fermer' onClick={onClose}>Se connecter</button>
    </div>
    </Modal>
  );
};

export default Popup;
