import { useState } from 'react';
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!searchTerm.trim()) {
        toast.error('Please enter a search term');
        return;
      }
      onSubmit(searchTerm);
      setSearchTerm('');
    };
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  };
  
export default SearchBar;
 

