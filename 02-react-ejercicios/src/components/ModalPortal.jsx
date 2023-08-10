import { createPortal } from "react-dom";
import "./Modal.css";

function ModalPortal({ children, isOpen, closeModal }) {
  const handleModalContainer = (e) => e.stopPropagation();

  return createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainer}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modals")
  );
}

export default ModalPortal;
