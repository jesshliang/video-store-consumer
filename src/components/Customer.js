import React from 'react';
import PropTypes from 'prop-types'
const Customer = ({name, id}) => {



  return(
    <div className="Customer" >
      {name}
      {id}
    </div>
  );

}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Customer;