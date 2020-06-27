import React from 'react';
import PropTypes from 'prop-types';
import LibraryItem from './LibraryItem';
import './Library.css';

const Library = (props) => {

  const onButtonClick = (selected) => {
    const newSelected = {
      id: selected.id,
      title: selected.title,
    }
    props.onUpdateSelectedMovie(newSelected)
	}
	
	const selected = () => {
    if (props.id === props.selectedMovie) {
      return true
    } else {
      return false
    }
	}

  let movieComponents  = [];

  if (props.movies) {
    movieComponents = props.movies.map((movie) => {
      return (
        <section key= { movie.id }>
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
            {selected() ? 'Selected' : 'Select'}
          </button>
        </section>

      );
    });
  };

  return(
    <div>
      <h1>All Movies</h1>
      <div className="show-all-movies">
        { movieComponents }
      </div>
    </div>
  );

}

Library.propTypes = {
	onUpdateSelectedMovie: PropTypes.func.isRequired,
	movies: PropTypes.array.isRequired,
	selectedMovie: PropTypes.string,
};

export default Library;