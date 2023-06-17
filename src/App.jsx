import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import countriesData from './countries.json';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <NavBar />

      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />

          <Routes>
            <Route
              path="/country/:countryId"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
