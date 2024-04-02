import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
    return (
      <div className={style.imageGallery}>
    
      {images.map((image, index) => (
        <img
          key={index}
          src={image.urls.small}  
          alt={image.alt}     
          onClick={() => onImageClick(image.urls.regular, image.alt)}
        />
      ))}
    </div>
    );
  };
  
  export default ImageGallery;