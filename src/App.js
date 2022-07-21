import logo from './logo.svg';
import './App.css';
import CoverPhoto from './components/CoverPhoto';
import Input from './components/Input';
import WeatherCard from './components/WeatherCard';
import Navigation from './components/Navigation';
import { useState } from 'react'
import { Nav } from 'react-bootstrap'
import TimeZones from './components/TimeZones';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom'

const myKey = 'd707853305204cf699a210307221407'
function App() {

  return (

      <div className='App'>
        <Navigation />
      </div>

  );
}

export default App;
