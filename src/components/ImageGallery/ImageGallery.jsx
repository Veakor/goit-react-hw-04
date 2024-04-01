import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
    if (!images || images.length === 0) {
      return <div>No images found</div>;
    }
    return (
      <div className={style.imageGallery}>
    
      {images.map((image, index) => (
        <img
          key={index}
          src={image.imageUrl}  
          alt={image.alt}     
          onClick={() => onImageClick(image.imageUrl, image.alt)}
        />
      ))}
    </div>
    );
  };
  
  export default ImageGallery;