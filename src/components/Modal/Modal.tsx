import classes from "./Modal.module.css";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    // OnClick: () => void;
}
function Modal({ children, isOpen, onClose }: ModalProps) {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />
            {isOpen && (
                <dialog open className={classes.modal}>
                    {children}
                </dialog>
            )}
        </>
    );
}
export default Modal;
