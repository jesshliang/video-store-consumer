import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

const Search = () => {

	const BASE_URL = "http://localhost:3000/"
	const [errorMessage, setErrorMessage] = useState(null);


	const searchMovieDatabase = (searchTerm) => {
		console.log(searchTerm)
		axios.get(BASE_URL + "movies/", {
			params: {
				query: searchTerm
			}
		})
    .then( (response) => {
			console.log(response);
			
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
	};

  return (
		<div>
			<SearchForm addSearchCallback={ searchMovieDatabase } />

		</div>
  );

}

export default Search;