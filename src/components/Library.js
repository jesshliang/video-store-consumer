import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Library.css';
import './Search.css';
import LibraryItem from './LibraryItem';

const Library = (props) => {

  const onButtonClick = (selected) => {
		console.log(selected)
    const newSelected = {
      id: selected.id,
      title: selected.title,
    }
    props.onUpdateSelectedMovie(newSelected)
	}
	
	const selected = () => {
		console.log(props)
		console.log("hi")
    if (props.id === props.selectedMovie) {
      return true
    } else {
      return false
    }
	}

  const movieComponents = props.movies.map((movie) => {
    return (
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
        <button onClick={ () => onButtonClick(movie) } className="item-link">
					{console.log(props.selectedMovie)}
          {selected() ? 'Selected' : 'Select'}
      	</button>
      </section>

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