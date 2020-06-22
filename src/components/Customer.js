import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './Customer.css'

const Customer = ({name, id, registered, address, city, state}) => {
  const [selected, setSelected] = useState(false);
  const onButtonClick = () => setSelected(!selected);

  return(
    <div className="customer-box" >
      <div className='customer-info'>
        <p>Customer: {name}</p>
        <p>Registered: {registered}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <button onClick={onButtonClick}>
          {selected ? 'Unselect' : 'Select'}
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