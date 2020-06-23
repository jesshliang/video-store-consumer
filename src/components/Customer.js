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
        <p><strong>Customer: </strong>{props.name}</p>
        <p><strong>Registered: </strong>{props.registered}</p>
        <p><strong>Address: </strong>{props.address}</p>
        <p><strong>City: </strong>{props.city}</p>
        <p><strong>State: </strong>{props.state}</p>
        <p><strong>Moves Checked Out: </strong>{props.movies_checked_out_count}</p>
        <p><strong>Selected: </strong>{props.selected}</p>
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