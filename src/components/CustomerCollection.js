import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Customer from './Customer';

const API_URL_BASE = 'http://localhost:3000/customers';

const CustomerCollection = () => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then( (response) => {
        const apiCustomerList = response.data;
        const newCustomerList = apiCustomerList.map((customer) => {
          return (
            <Customer
                key={customer.id}
                name={customer.name}
                registered={customer.registered_at}
                address={customer.address}
                city={customer.city}
                state={customer.state}
                movies_checked_out_count={customer.movies_checked_out_count}
              />
          );
        });

        setCustomerList(newCustomerList);
      })
      .catch( (error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      })
  }, []);



  return(
    <div className="customers" >
      { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
      { customerList }
    </div>
  );

}

export default CustomerCollection;