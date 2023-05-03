import { getMovieCredits } from 'Api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastList = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const getCastList = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCastList(response);
      } catch (error) {
        throw new Error('error');
      }
    };
    getCastList();
  }, [movieId]);
  return (
    <>
      {!castList.length > 0 && <p> нажаль нічого показати</p>}
      <ul className="list_cast">
        {castList.map(({ id, name, profile_path }) => {
          return (
            <li className="list_item" key={id}>
              {profile_path ? (
                <img
                  className="img_actor"
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt=""
                />
              ) : (
                <p className="no_img">тут мало бути фото</p>
              )}

              <p className="name_actor">{name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CastList;
