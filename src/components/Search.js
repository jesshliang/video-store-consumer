import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import axios from 'axios';
import SearchForm from './SearchForm';
import LibraryItem from './LibraryItem';
import './LibraryItem.css';
import './Library.css';
import './Search.css';

const Search = (props) => {

	const BASE_URL = "http://localhost:3000/"
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
						<Link onClick={ () => onSubmitHandler(movie) } className="item-link">Add to Library</Link>
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

export default Search;