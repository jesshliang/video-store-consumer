import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './Customer.css'

const Customer = (props) => {

  const onButtonClick = () => {
    const newSelected = {
      id: props.id,
      name: props.name,
    }
    props.onUpdateSelected(newSelected)
  }

  const selected = () => {
    console.log(props.selected_id)
    if (props.id === props.selected_id) {
      return true
    } else {
      return false
    }
  }

  return(
    <div className="customer-box" >
      <div className='customer-info'>
        <p>Customer: {props.name}</p>
        <p>Registered: {props.registered}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Moves checked out: {props.movies_checked_out_count}</p>
        <p>selected: {props.selected}</p>
        <button onClick={onButtonClick}>
          {selected() ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );

}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Customer;