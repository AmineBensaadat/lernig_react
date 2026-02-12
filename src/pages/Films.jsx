import { useEffect, useState } from 'react';
import TypeSelect from '../components/TypeSelect';
import FilmListing from '../components/FilmListing';
import RechercheInput from '../components/RechercheInput';

function Films() {
  const [searchTerm, setSearchTerm] = useState('Titanic');
  const [type, setType] = useState('movie');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = 'https://omdbapi.com/';
  const API_KEY = `157f9eb7`;

  // appel api for search films
  useEffect(() => {
    searchFilms(searchTerm, type);
  }, [searchTerm, type]);

  const searchFilms = async (query, type) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}?apikey=${API_KEY}&s=${query}&type=${type}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFilms(data.Search || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      search film exercise
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div>
          <RechercheInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div>
          <TypeSelect value={type} onChange={(e) => setType(e.target.value)} />
        </div>
      </div>
      <FilmListing films={films} isLoading={isLoading} />
    </>
  );
}

export default Films;
