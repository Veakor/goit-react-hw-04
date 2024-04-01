import  { useState } from 'react';
import axios from 'axios';
import {Loader} from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoaderComponent from './components/Loader/LoaderComponent';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');



  const handleSubmit = async (searchTerm) => {
    try {
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
  return (
    <div>
    <SearchBar onSubmit={handleSubmit} />
    {loading && <LoaderComponent />}
    {error && <ErrorMessage message={error} />}
    {images.length > 0 && <ImageGallery images={images} />}
    {images.length > 0 && <LoadMoreBtn />}
    {images.length > 0 && <ImageModal />} {/* Предполагаемое использование компонента ImageModal */}
  </div>
  );
};

export default App;