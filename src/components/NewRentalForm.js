import React, { useState } from 'react';

const NewRentalForm = (props) => {
  const [formFields, setFormFields] = useState({
    movie: '',
    customer: '',
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addRentalCallback(formFields);

    setFormFields({
      movie: '',
      customer: '',
    });
  };

  return(
    <div>
      <h1>Rental Form</h1>
      <form
        className="new-rental-form"
        onSubmit={onFormSubmit}
        data-testid="NewRentalForm--form"
      >
        <div>
          <label htmlFor="movie">Movie:</label>
          <input
            id="movie"
            name="movie"
            onChange={onInputChange}
            value={formFields.movie}
            className="movie"
          />
        </div>
        <div>
          <label htmlFor="customer">Customer:</label>
          <input
            id="customer"
            name="customer"
            onChange={onInputChange}
            value={formFields.customer}
          />
        </div>
        <input
          type="submit"
          value="Create Rental"
        />
      </form>
    </div>
  );

}


export default NewRentalForm;