import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ imgs, openModal }) => {
  return (
    <ul id="gallery" className={css.gallery}>
      {imgs.map((img) => {
        return (
          <li key={img.id} onClick={() => openModal(img)}>
            <ImageCard img={img} />
          </li>
        );
      })}
    </ul>
  );
};