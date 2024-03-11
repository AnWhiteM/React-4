import { useState} from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";
import css from './ImageGallery.module.css'


export const ImageGallery = ({ imgs }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const openModal = (x) => {
        setSelectedImg(x);
        setModalIsOpen(true);
      };

      const closeModal = () => {
        setModalIsOpen(false);
      };


  return (
    <ul id="gallery" className={css.gallery}>
      {imgs.map((img) => {
        return (
          <li key={img.id} onClick={() => openModal(img)}>
            <ImageCard img={img} />
          </li>
        );
      })}
      {selectedImg && (
        <ImageModal
          isOpened={modalIsOpen}
          isClosed={closeModal}
          img={selectedImg}
        />
      )}
    </ul>
  );
};