import React from 'react';
import Customer from './Customer';
import './CustomerCollection.css';

const CustomerCollection = (props) => {

  const customerComponents = props.customers.map((customer) => {
    return (
      <Customer
        id={customer.id}
        key={customer.id}
        name={customer.name}
        phone={customer.phone}

        movies_checked_out_count={customer.movies_checked_out_count}
        account_credit={customer.account_credit}

        address={customer.address}
        city={customer.city}
        state={customer.state}
        zip={customer.postal_code}
        
        selected_id={props.selectedCustomer}
        onUpdateSelected={props.onUpdateSelectedCustomer}
      />
    );
  });

  return(
    <section>
      <h2>All Customers</h2>
      <section className="customers">
        { customerComponents }
      </section>
    </section>
  );
}

export default CustomerCollection;