import React, { Component, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import Library from './components/Library';
import CustomerCollection from './components/CustomerCollection';

const App = () => {
  const BASE_URL = 'http://localhost:3000/'
  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL + "customers/")
      .then((response) => {
        setCustomerList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
  }, []);

  const checkout = () => {
    axios.post(BASE_URL + 'rentals/Jaws/', {
      customer_id: 1,
      due_date: 2020/07/17
    })
    .then((response) => {
      console.log(response)
    })
    .catch(() => {
      console.log(error.messages)
    });
  };


  return (
    <Router>
      <div>
        <h1>Title of Our Movie App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/customers">
            <CustomerCollection customers={customerList}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
