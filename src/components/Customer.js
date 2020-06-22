import React from 'react';
import PropTypes from 'prop-types'
import './Customer.css'

const Customer = ({name, id, registered, address, city, state}) => {

  return(
    <div className="customer-box" >
      <div className='customer-info'>
        <p>Customer: {name}</p>
        <p>Registered: {registered}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
      </div>
    </div>
  );

}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Customer;