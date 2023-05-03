import { searchMovie } from 'Api/Api';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Btn, Input, Label, ListLink } from './MovieSearchList.styled';

export const MovieSearchList = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const searchQuery = searchParams.get('query');
  const [query, setQuery] = useState(() => searchQuery || '');
  const location = useLocation();
  const [isLoader, setloader] = useState(false);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        setloader(true);
        const data = await searchMovie(searchQuery);
        setMovieList(data);
        setloader(false);
      } catch (error) {
        throw new Error('йой');
      } finally {
        setloader(false);
      }
    };
    if (searchQuery) {
      searchMovies();
    }
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };
  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <>
      {isLoader && <Loader />}
      <form onSubmit={handleSubmit}>
        <Label>
          Search Movie
          <Input type="search" value={query} onChange={handleChange} />
        </Label>
        <Btn type="submit">search</Btn>
      </form>
      <ul>
        {movieList.map(({ title, id }) => (
          <li key={id}>
            <ListLink state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </ListLink>
          </li>
        ))}
      </ul>
    </>
  );
};
