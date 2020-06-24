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
  const [selectedCustomer, setSelectedCustomer] = useState({
    name: '',
    id: null,
  });
  const [selectedMovie, setSelectedMovie] = useState({
    title: '',
    id: null,
  });
  const [customerList, setCustomerList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
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

  useEffect(() => {
    axios.get(BASE_URL + "movies/")
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
  }, []);


  const updateSelectedCustomer = (newSelected) => {
    console.log(newSelected)

    setSelectedCustomer({
      name: newSelected.name,
      id: newSelected.id
    });
    setSuccessMessage(`Customer ${newSelected.name} has been selected`)
  };

  const updateSelectedMovie = (newSelected) => {
    setSelectedMovie({
      title: newSelected.title,
      id: newSelected.id
    });
    setSuccessMessage(`Movie ${newSelected.title} has been selected`)
  };

  const showRentalButton = () => {
    console.log(selectedCustomer)
    if (!(selectedMovie.id === null) && !(selectedCustomer.id === null)) {
      return true;
    };
  };

  const checkout = () => {
    const rental_params = BASE_URL + `rentals/${selectedMovie.title}/check-out`;

    axios({
      method: 'post',
      url: rental_params,
      params: {
        customer_id: selectedCustomer.id,
        due_date: '2020/12/30'
      }
    })
    .then(() => {
      setSuccessMessage("Successfully made rental")
      const newSelected = {
        id: null,
        name: ''
      }
      updateSelectedCustomer(newSelected)
      updateSelectedMovie(newSelected)
    })
    .catch((error) => {
      setErrorMessage(error.message);
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
      setErrorMessage(error.message);
    });
  };

  return (
    <Router>
      <div>
        <header className="app-header">
          <div className='app-header__nav'>
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

            { errorMessage ? <div><h2 className="error-msg">{errorMessage}</h2></div> : '' }

            <hr />
          </div>
          <div className='app-header__selections'>
            <h2>Rental Selections</h2>
            <p>Movie: {selectedMovie.title.toUpperCase()}</p>
            <p>Customer: {selectedCustomer.name.toUpperCase()}</p>
            {
              showRentalButton() ? 
              <button onClick={checkout}>
                Create Rental
              </button> : ''
            } 
          </div>

        </header>
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
            <Search addMovieCreationCallback={ addMovieToLibrary }/>
          </Route>
          <Route path="/library">
            <Library 
              movies={movieList}
              onUpdateSelectedMovie={updateSelectedMovie}
              selectedMovie={selectedMovie.id}
            />
          </Route>
          <Route path="/customers">
            <CustomerCollection 
              customers={customerList} 
              onUpdateSelectedCustomer={updateSelectedCustomer} 
              selectedCustomer={selectedCustomer.id}
            />
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
