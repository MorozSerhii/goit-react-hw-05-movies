import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  return (
    <>
      <h1 style={{ margin: '15px 15px' }}>Популярні за фільми за сьогодні</h1>
      <MovieList />
    </>
  );
};

export default HomePage;
