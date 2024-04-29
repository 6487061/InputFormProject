import "../css/Modal.css";
import { Link } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa6";
import { LuFileEdit } from "react-icons/lu";

const Modal = ({ isOpen, closeModal, title, imageSrc, routePath }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content animate-modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal} aria-label="Close modal">&times;</span>

        <div className="card-container">
          <Link to="/upload-file" className="card" aria-label="Upload a file">
            <FaRegFilePdf className="card-icon" />
            <p className="card-text">Upload File</p>
          </Link>
          <Link to={routePath} className="card" aria-label="Proceed to manual input">
            <LuFileEdit className="card-icon" />
            <p className="card-text">Manual Input</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
