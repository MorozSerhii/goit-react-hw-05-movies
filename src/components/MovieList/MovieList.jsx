import { getPopular } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { List, ListLink } from './MovieList.styled';
const MovieList = () => {
  const [listMovies, setListMovies] = useState([]);
  const [isLoader, setloader] = useState(false);

  useEffect(() => {
    const MovieList = async () => {
      try {
        setloader(true);
        const data = await getPopular();
        setListMovies(data);
        setloader(false);
      } catch (error) {
        throw new Error('Error');
      } finally {
        setloader(false);
      }
    };
    MovieList();
  }, []);

  return (
    <>
      {isLoader && <Loader />}
      <List>
        {listMovies.map(({ title, id }) => (
          <li key={id}>
            <ListLink to={`movies/${id}`}>{title}</ListLink>
          </li>
        ))}
      </List>
    </>
  );
};

export default MovieList;
