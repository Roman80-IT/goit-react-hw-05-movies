import { Route, Routes } from 'react-router-dom';

import Cast from 'pages/Cast';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/movies/:movieId" component={MovieDetails} />
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
    </Routes>
  );
};
