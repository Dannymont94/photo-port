import React from 'react';

function Modal({ currentPhoto, toggleModal }) {
  const { name, category, description, index } = currentPhoto;
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <div className="flex-row space-between">
          <h3 className="modalTitle">{name}</h3>
          <button onClick={toggleModal} type="button">
            Close
          </button>
        </div>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt={description} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Modal;