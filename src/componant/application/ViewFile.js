import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ViewFileButton = ({ name }) => {
  const [fileUrl, setFileUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFileUrl(fileUrl);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <input type='file' name={name} onChange={handleFileChange} />
      <button type='button' onClick={() => setIsModalOpen(true)}>
        View
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel='File Preview Modal'
      >
        {fileUrl && <img src={fileUrl} alt='File Preview' />}
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </>
  );
};

export default ViewFileButton;