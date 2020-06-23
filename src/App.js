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
import NewRentalForm from './components/NewRentalForm';

const App = () => {
  const BASE_URL = 'http://localhost:3000/'
  const [selected, setSelected] = useState({
    name: '',
    id: null,
  })
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

  const updateSelected = (newSelected) => {
    console.log(newSelected)

    setSelected({
      name: newSelected.name,
      id: newSelected.id
    })
  };

  const checkout = (rental) => {
    const rental_params = BASE_URL + `rentals/${rental.movie}/check-out`;

    axios({
      method: 'post',
      url: rental_params,
      params: {
        customer_id: rental.customer,
        due_date: '2020/12/30'
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const addMovieToLibrary = (movie) => {
    axios({
      method: 'post',
      url: BASE_URL + 'movies/',
      params: movie 
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return (
    <Router>
      <div>
        <header className="app-header">
          <h1>Cool Movies</h1>
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
        </header>

        <div className='rental-form'>
          { selected.name }
          <NewRentalForm addRentalCallback={checkout}/>
        </div>


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
            { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }
          </Route>
          <Route path="/search">
            <Search addMovieCreationCallback={ addMovieToLibrary }/>
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/customers">
            <CustomerCollection customers={customerList} onUpdateSelected={updateSelected} selected={selected.id}/>
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
