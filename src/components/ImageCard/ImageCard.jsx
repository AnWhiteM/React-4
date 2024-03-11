import css from "./ImageCard.module.css"

export const ImageCard = ({ img }) => {
  return (
      <div className={css.cardBox}>
          <img alt={img.description} src={img.urls.small} className={css.imgBox}/>
      </div>
  );
};