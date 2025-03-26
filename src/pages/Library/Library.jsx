import { useState, useEffect } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { useDebounce } from '../../hooks/useDebounce';
import { Filters } from '../../components/Filters/Filters';
import { MediaLibrary } from '../../components/MediaLibrary/MediaLibrary';
import './Library.css';
import Loading from '../../components/Loading/Loading';

export const Library = () => {
  const [results, setResults] = useState([]);
  const { filters, handleFilterChange } = useFilters();
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(filters.query, 500);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const query = debouncedQuery || 'galaxies';

        const queryParams = Object.entries(filters)
          .filter(([key, value]) => key !== 'query' && value)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`);

        const finalQuery = `q=${encodeURIComponent(query)}${
          queryParams ? `&${queryParams}` : ''
        }`;

        const url = `https://images-api.nasa.gov/search?${finalQuery}`;

        console.log('Fetching URL:', url);

        const res = await fetch(url);
        const data = await res.json();

        if (!data.collection || !data.collection.items) {
          throw new Error(
            'No se encontraron resultados o hubo un error en la API.'
          );
        }

        setResults(data.collection.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery, filters]);

  return (
    <section id='library'>
      <h1>BEYOND THE COSMIC LENS</h1>
      <Filters filters={filters} handleFilterChange={handleFilterChange} />

      {loading ? <Loading /> : <MediaLibrary results={results} />}
    </section>
  );
};
