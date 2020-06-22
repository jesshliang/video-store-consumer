import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Customer from './Customer';

const API_URL_BASE = 'http://localhost:3000/customers';

const Customers = () => {
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const newCustomerList = [];

  useEffect(() => {
    axios.get(API_URL_BASE)
      .then( (response) => {
        const apiCustomerList = response.data;
        for (let customer of apiCustomerList) {
          newCustomerList.push(
            <p key={customer.id}>
              <Customer
                id={customer.id}
                name={customer.name}
              />
            </p>
          );
        };
        setCustomerList(newCustomerList);
      })
      .catch( (error) => {
        setErrorMessage(error.message);
        console.log(error.message);
      })
  }, []);



  return(
    <div className="Customers" >
      { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
      { customerList }
    </div>
  );

}

export default Customers;