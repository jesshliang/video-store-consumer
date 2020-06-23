import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Library.css';
import LibraryItem from './LibraryItem';

const Library = (props) => {
  const movieComponents = props.movies.map((movie) => {
    return (
      <LibraryItem
        key={ movie.id }
        id={ movie.id }
        title={ movie.title }
        overview={ movie.overview }
        releaseDate={ movie.release_date } 
        externalID={ movie.external_id }
        imageURL={ movie.image_url }
        selected_id={props.selectedMovie}
        onUpdateSelected={props.onUpdateSelectedMovie}
      />
    );
  });

  return(
    <div>
      <h1>All Movies</h1>
      <div className="show-all-movies">
        { movieComponents }
      </div>
    </div>
  );
}

export default Library;