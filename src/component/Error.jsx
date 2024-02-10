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
    <div className='title'>
      <h3 className='titre'>Vous devez d'abord vous connecter</h3>      
    </div>
    <div>
      <button className='btn' onClick={onClose}>Se connecter</button>
    </div>
    </Modal>
  );
};

export default Popup;