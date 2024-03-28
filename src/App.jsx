import  { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import ImageGallery from './components/ImageGallery/ImageGallery';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTerm) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchTerm}`, {
        headers: {
          Authorization: 'Client-ID qGnIJ82TK4aWAvZ_LXe10mkMvKrzLj-ANSCPrgtH1cY', 
        },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  return (
    <div>
      <h1>My App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;