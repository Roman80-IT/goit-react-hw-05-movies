import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
// import Home from 'pages/Home';
const Movies = lazy(() => import('../pages/Movies'));
// import Movies from 'pages/Movies';
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// import MovieDetails from 'pages/MovieDetails';
const Cast = lazy(() => import('../pages/Cast'));
// import Cast from 'pages/Cast';
const Reviews = lazy(() => import('../pages/Reviews'));
// import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
};
