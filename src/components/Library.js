import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Library.css';
import LibraryItem from './LibraryItem';

const Library = () => {
  const BASE_URL = "http://localhost:3000/"
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const newMovieList = [];

  useEffect(() => {
    axios.get(BASE_URL + "movies/")
    .then( (response) => {
      console.log(response);
      for (let movie of response.data) {
        newMovieList.push(
          <section>
            <LibraryItem
              key={ movie.id }
              id={ movie.id }
              title={ movie.title }
              overview={ movie.overview }
              releaseDate={ movie.release_date } 
              externalID={ movie.external_id }
              imageURL={ movie.image_url }
            />
          </section>
        );
      };
      setMovieList(newMovieList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, []);

  return(
    <div>
      <h2>All Movies</h2>
      <div className="show-all-movies">
        { movieList }
      </div>
    </div>

  );

}

export default Library;