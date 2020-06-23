import React, { useState } from 'react';

const NewRentalForm = (props) => {
  const [formFields, setFormFields] = useState({
    movie: '',
    customer: '',
  });

  const onIputChange = (event) => {
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.movie] = event.target.value;
    setFormFields(newFormFields);
  }

  return(
    <h1>hi</h1>
  )

}


export default NewRentalForm