import { useState, useEffect } from 'react';
import { getTrending } from 'services/api-service';
import { Loader } from 'components/Loader/Loader';

export const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMoviesList() {
      setLoading(true);
      try {
        const moviesList = await getTrending();
        setMoviesList(moviesList);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesList();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <ol>
        {moviesList.map(moviesList => (
          <li key={moviesList.id}>{moviesList.title}</li>
        ))}
      </ol>
    </>
  );
};
