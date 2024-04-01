import  { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoaderComponent from './components/Loader/LoaderComponent';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal'

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}`, {
        headers: {
          Authorization: 'Client-ID qGnIJ82TK4aWAvZ_LXe10mkMvKrzLj-ANSCPrgtH1cY', 
        },
      });

      setImages(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Error: Failed to load images.');
      setLoading(false);
    }
  };

  const handleImageClick = (imageUrl, alt) => {
    setSelectedImage({ imageUrl, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <LoaderComponent />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {images.length > 0 && <LoadMoreBtn />}
      {isModalOpen && selectedImage && (
        <ImageModal 
          isOpen={isModalOpen} 
          onRequestClose={closeModal} 
          imageUrl={selectedImage.imageUrl} 
          alt={selectedImage.alt} 
        />
      )}
    </div>
  );
};

export default App;