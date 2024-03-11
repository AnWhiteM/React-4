import Modal from "react-modal";
import css from "./ImageModal.module.css"

export const ImageModal = ({ isOpened, isClosed, img }) => {
    return (
        <Modal
            isOpen={isOpened}
            onRequestClose={isClosed}
            style={{
                overlay: { zIndex: 11 },
            }}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            <button onClick={() => isClosed()}>close</button>
            <img src={img.urls.regular} alt={img.alt_description} />
        </Modal>
    );
};

