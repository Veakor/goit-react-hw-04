const ImageGallery = ({ images }) => {
    if (!images || images.length === 0) {
      return null;
    }
  
    return (
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <div>
              <img src={image.url} alt={image.alt} />
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ImageGallery;