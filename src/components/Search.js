import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import LibraryItem from './LibraryItem';

const Search = () => {

	const BASE_URL = "http://localhost:3000/"
	const [errorMessage, setErrorMessage] = useState(null);
	const [displaySearch, setDisplaySearch] = useState([]);
  const searchList = [];

	const searchMovieDatabase = (searchTerm) => {
		console.log(searchTerm)

		// useEffect(() => {
			axios.get(BASE_URL + "movies/", {
				params: {
					query: searchTerm
				}
			})
			.then( (response) => {
				console.log(response);
				for (let movie of response.data) {
					searchList.push(
					<li key={ movie.id }>
						<LibraryItem
							key={ movie.id }
							id={ movie.id }
							title={ movie.title }
							overview={ movie.overview }
							releaseDate={ movie.release_date } 
							externalID={ movie.external_id }
						/>
					</li>
					);
				};
				setDisplaySearch(searchList);
			})
			.catch((error) => {
				setErrorMessage(error.message);
				console.log(error.message);
			});
		// }, []);
	};

  return (
		<div>
			<SearchForm addSearchCallback={ searchMovieDatabase } />

			<ul>
        { displaySearch }
      </ul>
		</div>
  );

}

export default Search;