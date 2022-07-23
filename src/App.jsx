import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import NotFoundPage from 'pages/NotFoundPage';
import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}
