import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-500">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

