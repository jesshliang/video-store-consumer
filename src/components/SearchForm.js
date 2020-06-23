import React, { useState } from 'react';
import './SearchForm.css'

const Search = (props) => {

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
			<h2>Search for a Movie</h2>
			<div>
				<div>
					{/* <label className="new-card-form__form-label" htmlFor="text">Text: </label> */}
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

export default Search;