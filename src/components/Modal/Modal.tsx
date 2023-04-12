import classes from "./Modal.module.css";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    // OnClick: () => void;
}
function Modal(props: ModalProps) {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onClose} />
            {props.isOpen && (
                <dialog open className={classes.modal}>
                    {props.children}
                </dialog>
            )}
        </>
    );
}
export default Modal;
