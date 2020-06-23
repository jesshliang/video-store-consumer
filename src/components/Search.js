import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import LibraryItem from './LibraryItem';
import './LibraryItem.css';
import './Library.css';
import './Search.css';

const Search = () => {

	const BASE_URL = "http://localhost:3000/"
	const [errorMessage, setErrorMessage] = useState(null);
	const [displaySearch, setDisplaySearch] = useState([]);
  const searchList = [];

	const searchMovieDatabase = (searchTerm) => {
		console.log(searchTerm)

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
						<a href="" className="item-link">Add to Library</a>
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

			<div className="show-all-movies">
        { displaySearch }
      </div>
		</div>
  );

}

export default Search;