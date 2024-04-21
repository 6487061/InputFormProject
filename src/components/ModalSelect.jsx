import React from "react";
import "../css/Modal.css";
import { Link } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa6";
import { LuFileEdit } from "react-icons/lu";

const Modal = ({ isOpen, closeModal, title, imageSrc }) => {
  // Render null if isOpen is false (modal is closed)
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        {/* Additional content can be added here */}
        <div className="card-container">
          <Link to="/upload-file" className="card">
            
              <FaRegFilePdf className="card-icon" />
              <p className="card-text">Upload File</p>
            
          </Link>
          <Link to="/borrowing" className="card">
           
              <LuFileEdit className="card-icon" />
              <p className="card-text">Manual Input</p>
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
