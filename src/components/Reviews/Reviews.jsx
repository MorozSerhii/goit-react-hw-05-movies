import { getMovieReviews } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setmovieReview] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setmovieReview(response);
      } catch (error) {}
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      {!movieReview.length > 0 && <p>Відгуків ще не було</p>}
      <ul>
        {movieReview.map(({ id, author, content }) => (
          <li className="list_item-rew" key={id}>
            <p className="author_name">{author}</p>
            <p className="rew_content">{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
