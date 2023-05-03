export const genresJoiner = ({ genres }) => {
  if (!genres) return;

  return genres.map(genre => genre.name).join(', ');
};
