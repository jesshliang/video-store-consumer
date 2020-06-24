import React from 'react';
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
    <section className='customer-listing'>

      <section className="customer-name">
        <h2><strong>{props.name}</strong></h2>
        <p>{props.phone}</p>
      </section>

      <section className="rental-info">
        <h4>Rental Info:</h4>
        <ul>
          <li>Moves checked out: {props.movies_checked_out_count}</li>
          <li>Credit: ${props.account_credit}</li>
        </ul>
      </section>

      <section className="address-info">
          <h4>Address: </h4>
          <ul>
            <li>{props.address}</li>
            <li>{props.city}, {props.state} {props.zip}</li>
            <li></li>
          </ul>
      </section>

      <button onClick={onButtonClick} className="button">
        {selected() ? 'Selected' : 'Select for Rental'}
      </button>
    </section>
  );

}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Customer;