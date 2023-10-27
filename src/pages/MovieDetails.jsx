import React, { useEffect, useState, useMemo, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Additional } from 'components/Additional/Additional';
import { getMoviesDetails } from 'services/api';
import {
  // Arrow,
  // Back,
  Details,
  List,
  Poster,
  SubTitle,
} from './MovieDetailsPage.styled';
import { Wrapper, Title } from 'components/GeneralStyled/General.styled';
import { Loader } from 'components/Loader';
import { Back } from 'components/Back/Back';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const [moviesDetail, setMoviesDetail] = useState(null); // null
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getDetails() {
      try {
        setLoading(true);
        const response = await getMoviesDetails(movieId);
        // console.log('Data from API:', response); // Вивести дані, отримані з API
        setMoviesDetail(response);
      } catch (e) {
        if (e.code !== 'ERR_CANCELED') {
          toast.error('Something went wrong. Try again.');
        }
      } finally {
        setLoading(false);
      }
    }

    getDetails();
  }, [movieId]);

  // console.log('MovieDetails: ', MovieDetails);

  const countScore = useMemo(() => {
    return Math.round(moviesDetail?.vote_average * 10); //  ?. для безпеки
  }, [moviesDetail?.vote_average]); //  ?. для безпеки

  if (loading) {
    return <Loader />;
  }
  // console.log('moviesDetail in render:', moviesDetail); // Вивести дані перед відображенням
  return (
    <div>
      <Wrapper>
        <Back backLinkLocationRef={backLinkLocationRef.current} />
        {/* <Arrow /> Go back */}
        {/* </Back> */}
        {moviesDetail && ( // Замість moviesDetail.length !== 0
          <Details>
            <Poster
              src={
                moviesDetail.poster_path
                  ? `${BASE_URL}${moviesDetail.poster_path}`
                  : DEFAULT_IMG
              }
              alt={`${moviesDetail.title} poster`}
            />
            <div>
              <Title>{`${
                moviesDetail.title
              } (${moviesDetail.release_date?.slice(0, 4)})`}</Title>
              <p>User score: {countScore} %</p>
              <SubTitle>Overview</SubTitle>
              <p>{moviesDetail.overview}</p>
              <SubTitle>Genres</SubTitle>
              <List>
                {moviesDetail.genres?.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </List>
            </div>
          </Details>
        )}
      </Wrapper>
      <Additional backLocation={location.state} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

// to={location.state ?? '/'}
