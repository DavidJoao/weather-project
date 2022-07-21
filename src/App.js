import logo from './logo.svg';
import './App.css';
import CoverPhoto from './components/CoverPhoto';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';
import { useState } from 'react'

const myKey = 'd707853305204cf699a210307221407'

// fetch(' https://api.weatherapi.com/v1/current.json?key=' + myKey +'&q=Nochistlan')
// .then((res) => { return res.json()})
// .then((data) => console.log(data))
// .catch((err ) => console.log(err))

function App() {

  return (

      <div className='App'>
        <CoverPhoto />
        <Input />
      </div>

  );
}

export default App;
