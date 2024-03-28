import style from './ImageGalery.module.css';

const ImageGallery = ({ images }) => {
    if (!images || images.length === 0) {
      return <div>No images found.</div>;
    }
    return (
      <ul className={style.ImageGallery}>
        {images.map(image => (
          <li key={image.id} className={style.ImageGalleryItem}>
            <div>
            <img src={image.urls.small} alt={image.alt_description || 'Image'} />
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ImageGallery;