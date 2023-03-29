import classes from "./Modal.module.css";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

function Modal(props: ModalProps) {
    return (
        <>
            <div className="backdrop" onClick={props.onClose} />
            <dialog open className={classes.modal}>
                {props.children}
            </dialog>
        </>
    );
}

export default Modal;
