import { getMovieById } from 'Api/Api';
import { genresJoiner } from 'Api/helpers';
import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetails] = useState({});
  const [isLoader, setloader] = useState(false);

  useEffect(() => {
    const movieDetails = async () => {
      try {
        setloader(true);
        const movieInfo = await getMovieById(movieId);
        setMovieDetails(movieInfo);
      } catch (error) {
        throw new Error('Error');
      } finally {
        setloader(false);
      }
    };
    movieDetails();
  }, [movieId]);
  const { title, release_date, overview, vote_average, poster_path, genres } =
    movieDetail;
  const location = useLocation();
  const backButton = useRef(location.state?.from ?? '/');
  return (
    <div>
      {isLoader && <Loader />}

      <div className="card_container">
        {poster_path && (
          <img
            className="title_img"
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt=""
          />
        )}
        <div className="description_film">
          <Link className="back_Btn" to={backButton.current}>
            Back
          </Link>
          <h2>Назва: {title}</h2>
          <p>
            <span className="text">Рейтинг: </span> {vote_average}
          </p>
          <p>
            <span className="text">Жанр: </span>
            {genresJoiner({ genres })}
          </p>
          <p>
            <span className="text">Дата релізу: </span>Дата релізу:{' '}
            {release_date}
          </p>
          <p>
            <span className="text">Опис:</span> {overview}
          </p>
          <div className="btn_wrapper">
            <Link to="Cast" className="links_details">
              Cast
            </Link>
            <Link to="reviews" className="links_details">
              Reviews
            </Link>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
