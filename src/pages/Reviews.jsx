import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Wrapper } from 'components/GeneralStyled/General.styled';
import { Review } from 'components/Review/Review';
import { getReviews } from 'services/api';
import { Loader } from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const scrollToAdditional = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  useEffect(() => {
    async function getReviewsInfo() {
      try {
        setLoading(true);
        const response = await getReviews(movieId);
        setReviews(response);
        scrollToAdditional();
      } catch (error) {
        const errorMessage =
          error.response?.data.message ||
          'An error occurred while fetching reviews.';

        // console.log('errorMessage: ', errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    getReviewsInfo();
  }, [movieId]);

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <Review key={id} author={author} content={content}></Review>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default Reviews;

// {reviews !== null &&
