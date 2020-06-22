import React from 'react';
import PropTypes from 'prop-types'
const Customer = ({name, id}) => {



  return(
    <div className="Customer" >
      <p>Name: {name}</p>
      <p>ID: {id}</p>
    </div>
  );

}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Customer;