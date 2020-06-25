import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm';
import LibraryItem from './LibraryItem';
import './Search.css';

const Search = (props) => {

	const BASE_URL = "https://cors-anywhere.herokuapp.com/http://example-env.eba-2un3hw2p.us-west-2.elasticbeanstalk.com/";
	const [errorMessage, setErrorMessage] = useState(null);
	const [displaySearch, setDisplaySearch] = useState([]);
  const searchList = [];

	const searchMovieDatabase = (searchTerm) => {
		console.log(searchTerm)

		const onSubmitHandler = (movie) => {
			props.addMovieCreationCallback(movie);
		};

		axios.get(BASE_URL + "movies/", {
			params: {
				query: searchTerm
			}
		})
		.then( (response) => {
			console.log(response);
			for (let movie of response.data) {
				searchList.push(
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
						<button onClick={ () => onSubmitHandler(movie) } className="item-link">Add to Library</button>
					</section>
				);
			};
			setDisplaySearch(searchList);
		})
		.catch((error) => {
			setErrorMessage(error.message);
			console.log(error.message);
		});
	
	};

  return (
		<div>
			<SearchForm addSearchCallback={ searchMovieDatabase } />

			{ props.addMovieAlert !== '' &&
        <p className="add-movie-alert">
					{ props.addMovieAlert }
				</p>
      }

			<div className="show-all-movies">
        { displaySearch }
      </div>
		</div>
	);
	
}

Search.propTypes = {
  addMovieCreationCallback: PropTypes.func.isRequired,
  addMovieAlert: PropTypes.func.isRequired,
};

export default Search;