import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css'

const SearchForm = (props) => {

	const [formFields, setFormFields] = useState({
		query: '',
	});

	const onFieldChange = (event) => {
		const updatedFormState = {...formFields};

		updatedFormState[event.target.name] = event.target.value;
		setFormFields(updatedFormState);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if(formFields.query){
			props.addSearchCallback(formFields.query)
		}
	};

  return (
		<form onSubmit={ onSubmitHandler }>
			<h1>Search for a Movie</h1>
			<div>
				<div>
					<input
						name="query"
						className="input-search"
						onChange={ onFieldChange }
						value={ formFields.text }
					/>
				</div>
				<input
					type="submit"
					name="submit"
					value="Submit"
					className="input-search-button"
					onClick={ onSubmitHandler }
				/>
			</div>
		</form>
	);
	
}

SearchForm.propTypes = {
  addSearchCallback: PropTypes.func.isRequired
};

export default SearchForm;