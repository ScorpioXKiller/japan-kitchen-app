import reactDom from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onModalClose}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onModalClose={props.onModalClose} />,
        portalElement
      )}
      {reactDom.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </>
  );
};

export default Modal;
