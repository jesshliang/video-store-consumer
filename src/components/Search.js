import React, { useState } from 'react';

const Search = (props) => {

	const [formFields, setFormFields] = useState({
		searchTerm: '',
	});

	const onFieldChange = (event) => {
		const updatedFormState = {...formFields};

		updatedFormState[event.target.name] = event.target.value;
		setFormFields(updatedFormState);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if(formFields.text || formFields.emoji){
			// ADD CALLBACK FUNCTION FOR SHOWING SEARCH RESULTS
			props.addCardCallBack(formFields)
		}

		setFormFields({
			searchTerm: '',
		})
	};

  return (
		<form onSubmit={ onSubmitHandler }>
			<h2>Search for a Movie</h2>
			<div>
				<div>
					{/* <label className="new-card-form__form-label" htmlFor="text">Text: </label> */}
					<input
						name="searchTerm"
						id="text"
						onChange={ onFieldChange }
						value={ formFields.text }
					/>
				</div>
				<input
					type="submit"
					name="submit"
					value="Submit"
					onClick={ onSubmitHandler }
				/>
			</div>
		</form>
  );

}

export default Search;