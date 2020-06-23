import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';


const CustomerCollection = (props) => {

  const customerComponents = props.customers.map((customer) => {
    return (
      <Customer
        id={customer.id}
        key={customer.id}
        name={customer.name}
        registered={customer.registered_at}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        movies_checked_out_count={customer.movies_checked_out_count}
        selected_id={props.selected}
        onUpdateSelected={props.onUpdateSelected}
      />
    );
  });

  return(
    <div className="customers" >
      { customerComponents }
    </div>
  );

}

export default CustomerCollection;